export interface Message {
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
  suggestions?: string[];
}

export interface BotResponse {
  message: string;
  suggestions?: string[];
}

export interface MeditationStep {
  id: string;
  text: string;
  duration?: number;
  nextSteps?: string[];
}