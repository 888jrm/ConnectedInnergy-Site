import { chakraAffirmations } from '../data/affirmations';
import { BotResponse } from '../types/chat';
import { postAffirmationSuggestions } from '../data/chatSuggestions';

export class AffirmationManager {
  private currentIndex = -1;

  constructor() {}

  getNextAffirmation(): BotResponse {
    this.currentIndex = (this.currentIndex + 1) % chakraAffirmations.length;
    const affirmation = chakraAffirmations[this.currentIndex];

    return {
      message: `${affirmation.chakra} Chakra Affirmation:\n\n"${affirmation.affirmation}"\n\n${affirmation.message}`,
      suggestions: postAffirmationSuggestions
    };
  }

  reset() {
    this.currentIndex = -1;
  }
}