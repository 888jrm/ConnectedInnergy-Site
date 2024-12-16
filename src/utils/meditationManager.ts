import { BotResponse } from '../types/chat';
import { postMeditationSuggestions } from '../data/chatSuggestions';

const meditationContent = `Welcome to this calming meditation by Connected Innergy.

Find a comfortable place where you can sit or lie down, and allow yourself a few moments to settle in. Take a deep breath in through your nose… slowly… letting your lungs fill with fresh, calming air. Hold it for a moment at the top… and then exhale slowly through your mouth, releasing any tension.

As you continue breathing, allow your breath to deepen, becoming smooth and steady. Inhale deeply… feeling the breath fill your body with calm and peace… and then exhale fully, letting go of any worries, any distractions, any thoughts that do not serve you in this moment. Feel the weight of the world lifting off your shoulders with each breath.

Picture yourself in a peaceful place.
Imagine you're in a quiet, serene garden—lush and green, with the gentle sound of a breeze rustling through the leaves. The sun is shining softly, warming your skin just enough to make you feel comfortable. The air smells fresh, like flowers and earth. You can hear the faint sound of a stream flowing nearby, its gentle waters creating a rhythm that calms your mind.

Let your mind drift into this peaceful moment.
With each breath, allow yourself to feel more grounded, more centered, as though you are connected to this peaceful place. Feel each breath flowing in and out like the rhythm of the stream, steady and calming. As you exhale, feel any tension or stress dissolving away, leaving only a sense of deep calm and relaxation.

Now, with each breath, repeat to yourself these affirmations:

"I am calm and peaceful in this moment."
"I release anything that no longer serves me."
"I trust that everything is unfolding as it should."
"I am worthy of peace, love, and joy."
Feel the energy of these words fill your body.
As you breathe, feel your heart expand with gratitude, with acceptance, with love. Your body is at ease, your mind quiet, your spirit at peace.

Allow any remaining tension to melt away, and take a moment to enjoy the stillness. Know that in this moment, you are safe, you are at peace, and all is well.

When you're ready, slowly begin to bring your awareness back to the present.
Wiggle your fingers and toes. Take a few gentle breaths, feeling the energy return to your body. When you're ready, open your eyes, carrying this sense of calm and peace with you as you move forward.

May this meditation guide you to a place of inner peace, where you can find clarity and relaxation anytime you need it.

✨ Thank you for sharing this peaceful moment with Connected Innergy ✨`;

export class MeditationManager {
  start(): BotResponse {
    return {
      message: meditationContent,
      suggestions: ["Daily affirmations"]
    };
  }

  continue(): BotResponse {
    return this.start();
  }

  reset() {}
}