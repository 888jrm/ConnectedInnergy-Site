import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to your email service
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mt-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10">
        <Sparkles className="w-32 h-32 text-green-400" />
      </div>
      
      <h2 className="text-2xl font-semibold mb-4 text-center">Join Our Spiritual Journey</h2>
      <p className="text-gray-300 text-center mb-6">
        Subscribe to receive updates about new meditations, spiritual insights, and exclusive content
      </p>

      {isSubmitted ? (
        <div className="text-center p-4 bg-green-400/20 rounded-lg">
          <p className="text-green-400 font-semibold">✨ Welcome to our spiritual community! ✨</p>
          <p className="text-gray-300 mt-2">Check your inbox for a confirmation email.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white/5 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400/50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-green-300 transition-colors flex items-center justify-center space-x-2 group"
          >
            <span>Join Our Community</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
      
      <p className="text-gray-400 text-sm text-center mt-4">
        By subscribing, you'll receive updates about new content and special offers
      </p>
    </div>
  );
}