import { BotResponse } from '../types/chat';
import { postBreathworkSuggestions } from '../data/chatSuggestions';

const breathworkScript = `Box breathing involves four basic steps, each lasting 4 seconds:

1. Inhale deeply through your nose, feeling your lungs expand with fresh, revitalizing energy.
   Count: 1... 2... 3... 4...

2. Hold this breath gently, letting peace fill every cell of your body.
   Count: 1... 2... 3... 4...

3. Exhale slowly through your mouth, releasing any tension or stress.
   Count: 1... 2... 3... 4...

4. Pause here, embracing the calm stillness before beginning again.
   Count: 1... 2... 3... 4...

Box breathing, also known as square breathing, is a powerful technique for finding inner calm and balance. As you continue this rhythm, feel yourself becoming more centered and peaceful with each cycle.

✨ Remember, you can return to this peaceful breathing pattern anytime you need to restore harmony and tranquility. ✨`;

export class BreathingManager {
  private isStarted = false;

  constructor() {}

  startExercise(): BotResponse {
    this.isStarted = true;
    return {
      message: breathworkScript,
      suggestions: postBreathworkSuggestions
    };
  }

  reset() {
    this.isStarted = false;
  }
}