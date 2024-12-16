export const breathingExercises = {
  fourCount: {
    title: "Connected Innergy 4-Count Breathing Exercise",
    introduction: `Welcome to a moment of tranquility. Let's begin a calming breathing exercise to help you center your mind.

Take a moment to find a comfortable position and prepare yourself for this peaceful journey.`,
    steps: [
      {
        action: "inhale",
        duration: 4,
        instruction: "Inhale deeply through your nose for a count of 4.",
        description: `Feel the cool air as it enters your body, gently expanding your chest and belly. 

With each breath in, invite calmness and clarity into your mind.`
      },
      {
        action: "hold",
        duration: 4,
        instruction: "Hold your breath softly for a count of 4.",
        description: `Pause for a moment, embracing the stillness. 

Let go of any distractions and feel the peacefulness in this pause.`
      },
      {
        action: "exhale",
        duration: 4,
        instruction: "Exhale slowly through your mouth for a count of 4.",
        description: `As you breathe out, release any tension or stress. 

Imagine the breath carrying away your worries, leaving only relaxation and calmness.`
      },
      {
        action: "pause",
        duration: 4,
        instruction: "Pause for a count of 4 before beginning again.",
        description: `Take a brief moment of quiet reflection before starting the cycle anew. 

Feel the sense of calm continue to deepen with each breath.`
      }
    ],
    conclusion: `Repeat this cycle as many times as you need. Let each breath bring you closer to a state of serenity and balance.

This exercise can be repeated at any time you need to restore a sense of calm and clarity. Let the gentle flow of your breath guide you back to a peaceful state.

Connected Innergy: Cultivating peace, one breath at a time.`
  }
};

export type BreathingExercise = keyof typeof breathingExercises;