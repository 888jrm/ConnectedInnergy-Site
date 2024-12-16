import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import { Message, BotResponse } from '../../types/chat';
import { processUserInput } from '../../utils/chatLogic';
import ChatMessage from './ChatMessage';
import ChatSuggestions from './ChatSuggestions';
import { initialSuggestions } from '../../data/chatSuggestions';
import { useSpeechSynthesis } from '../../hooks/useSpeechSynthesis';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { speak, speaking, cancel } = useSpeechSynthesis();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleSend('');  // Trigger welcome message
    }
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (text: string) => {
    if (text.trim()) {
      const userMessage: Message = {
        type: 'user',
        text,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, userMessage]);
    }
    
    setInput('');
    const response: BotResponse = await processUserInput(text);
    
    const botMessage: Message = {
      type: 'bot',
      text: response.message,
      timestamp: new Date(),
      suggestions: response.suggestions,
    };

    setMessages(prev => [...prev, botMessage]);
    setSuggestions(response.suggestions || []);

    // Speak the meditation content if it's a meditation response
    if (text.toLowerCase().includes('meditation')) {
      speak(response.message);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  const toggleSpeech = () => {
    if (speaking) {
      cancel();
    } else {
      const lastBotMessage = messages.findLast(m => m.type === 'bot');
      if (lastBotMessage) {
        speak(lastBotMessage.text);
      }
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-400 transition-all transform hover:scale-105 z-40 group"
          aria-label="Open meditation guide"
        >
          <div className="relative p-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">ॐ</span>
              <span className={`font-medium overflow-hidden transition-all duration-300 ${
                isButtonHovered ? 'w-32 opacity-100' : 'w-0 opacity-0'
              }`}>
                Begin Your Journey
              </span>
            </div>
            <div className={`absolute inset-0 rounded-full border-4 border-blue-500/50 animate-ping ${
              isButtonHovered ? 'opacity-0' : 'opacity-100'
            }`} />
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-green-900/95 rounded-lg shadow-xl flex flex-col z-50">
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">ॐ</span>
              <h3 className="text-lg font-semibold">Meditation Guide</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleSpeech}
                className="text-blue-400 hover:text-blue-300 transition-colors p-2"
                aria-label={speaking ? "Stop speaking" : "Start speaking"}
              >
                {speaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close meditation guide"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {suggestions.length > 0 && (
            <ChatSuggestions
              suggestions={suggestions}
              onSuggestionClick={handleSuggestionClick}
            />
          )}

          <div className="p-4 border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex space-x-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <div className="mt-2 text-center">
              <a
                href="https://discord.gg/connectedinnergy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center space-x-1"
              >
                <span>Join our Discord community</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}