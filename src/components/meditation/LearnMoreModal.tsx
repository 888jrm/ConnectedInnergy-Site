import React from 'react';
import { X } from 'lucide-react';

interface LearnMoreModalProps {
  onClose: () => void;
}

export default function LearnMoreModal({ onClose }: LearnMoreModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-green-900/95 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-green-900/95 p-4 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Why Meditate?</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div className="flex gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">Benefits of Meditation</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-green-400">Reduce Stress and Anxiety:</strong> Meditation helps activate 
                  the body's relaxation response, reducing stress hormones and calming the mind. It encourages 
                  mindfulness, which can lessen anxiety by focusing on the present moment instead of worrying 
                  about the future or past.
                </p>
                <p>
                  <strong className="text-green-400">Improve Mental Clarity and Focus:</strong> Regular meditation 
                  helps clear the mind, increasing focus and concentration. By practicing mindfulness, you train 
                  your brain to stay present, making it easier to direct attention to tasks at hand.
                </p>
                <p>
                  <strong className="text-green-400">Enhance Emotional Well-being:</strong> Meditation helps regulate 
                  emotions by promoting awareness and acceptance of feelings. Over time, it can lead to a more 
                  balanced emotional state, improving your ability to manage challenges.
                </p>
                <p>
                  <strong className="text-green-400">Promote Physical Health:</strong> Meditation has been linked 
                  to lower blood pressure, improved immune function, and better sleep quality. By calming the 
                  nervous system, it helps the body function optimally.
                </p>
                <p>
                  <strong className="text-green-400">Deepen Spiritual Awareness:</strong> For many, meditation is 
                  a path to spiritual growth. It creates space for inner peace and connection with something greater, 
                  whether through self-reflection or a sense of universal connectedness.
                </p>
              </div>
            </div>
            <div className="hidden lg:block w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1578091879915-33ee869e2cd7?auto=format&fit=crop&q=80&w=800" 
                alt="Person meditating"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tips for Meditation Success</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Be consistent: Try to meditate at the same time each day</li>
              <li>Be patient: Don't expect instant results. Meditation is a skill that improves with practice</li>
              <li>Practice self-compassion: It's natural for your mind to wander. When it does, simply return to your breath without judgment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
            <div className="bg-white/10 rounded-lg p-6">
              <ol className="list-decimal list-inside text-gray-300 space-y-4">
                <li>Find a quiet, comfortable space</li>
                <li>Set a timer for 5-10 minutes</li>
                <li>Sit comfortably with a straight back</li>
                <li>Close your eyes and focus on your breath</li>
                <li>When your mind wanders, gently return focus to your breath</li>
                <li>End your session gradually and reflect on how you feel</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}