import { initialSuggestions, postAffirmationSuggestions, postMeditationSuggestions, postBreathworkSuggestions } from '../data/chatSuggestions';
import { chakraAffirmations } from '../data/affirmations';
import { BotResponse } from '../types/chat';
import { AffirmationManager } from './affirmationManager';
import { MeditationManager } from './meditationManager';
import { BreathingManager } from './breathingManager';

const affirmationManager = new AffirmationManager();
const meditationManager = new MeditationManager();
const breathingManager = new BreathingManager();

export async function processUserInput(input: string): Promise<BotResponse> {
  const lowerInput = input.toLowerCase();

  // Handle affirmations
  if (lowerInput.includes('daily affirmation') || lowerInput.includes('affirmation') || lowerInput.includes('next affirmation')) {
    return affirmationManager.getNextAffirmation();
  }

  // Handle meditation
  if (lowerInput.includes('calming meditation') || lowerInput.includes('meditation')) {
    return meditationManager.start();
  }

  // Handle continue meditation
  if (lowerInput.includes('continue')) {
    return meditationManager.continue();
  }

  // Handle breath work
  if (lowerInput.includes('breath work')) {
    return breathingManager.startExercise();
  }

  // Default welcome response
  return {
    message: "Welcome to Connected Innergy's spiritual guidance. Choose from the options below to begin your journey to inner peace and spiritual growth.",
    suggestions: initialSuggestions
  };
}