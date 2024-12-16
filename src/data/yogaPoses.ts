import { Flame, Leaf, Mountain, Wind, Waves, Sun, Moon, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface YogaPose {
  id: string;
  name: string;
  sanskritName: string;
  description: string;
  benefits: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon: LucideIcon;
  image: string;
  steps: string[];
  cautions?: string[];
}

export const yogaPoses: YogaPose[] = [
  {
    id: 'mountain-pose',
    name: 'Mountain Pose',
    sanskritName: 'Tadasana',
    description: 'A foundational standing pose that improves posture and body awareness.',
    benefits: [
      'Improves posture',
      'Strengthens thighs, knees, and ankles',
      'Firms abdomen and buttocks',
      'Relieves sciatica',
      'Reduces flat feet'
    ],
    difficulty: 'Beginner',
    duration: '1-5 minutes',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    steps: [
      'Stand with feet together or hip-width apart',
      'Ground down through all four corners of your feet',
      'Engage your thighs and draw your abdominals in and up',
      'Lengthen your tailbone toward the floor',
      'Draw your shoulders back and down',
      'Hold your arms alongside your body',
      'Look straight ahead with your chin parallel to the floor'
    ]
  },
  {
    id: 'child-pose',
    name: 'Child\'s Pose',
    sanskritName: 'Balasana',
    description: 'A restful pose that gently stretches the hips, thighs, and back.',
    benefits: [
      'Releases tension in back, shoulders and chest',
      'Promotes relaxation',
      'Helps relieve stress and fatigue',
      'Flexibly stretches hips and thighs',
      'Calms the mind'
    ],
    difficulty: 'Beginner',
    duration: '3-5 minutes',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    steps: [
      'Kneel on the floor with toes together and knees hip-width apart',
      'Lower your torso between your knees',
      'Extend your arms alongside your torso with palms facing up',
      'Rest your forehead on the ground',
      'Relax your shoulders towards the ground',
      'Keep your arms long and extended, supporting your head and neck'
    ]
  },
  {
    id: 'sun-salutation',
    name: 'Sun Salutation',
    sanskritName: 'Surya Namaskar',
    description: 'A sequence of poses that warm up the entire body and increase energy.',
    benefits: [
      'Improves circulation',
      'Strengthens the entire body',
      'Increases flexibility',
      'Calms the mind',
      'Regulates breathing'
    ],
    difficulty: 'Intermediate',
    duration: '10-15 minutes',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&q=80&w=800',
    steps: [
      'Start in Mountain Pose',
      'Raise arms overhead',
      'Forward fold',
      'Half-lift',
      'Plank pose',
      'Lower to ground',
      'Upward-facing dog',
      'Downward-facing dog',
      'Return to standing'
    ],
    cautions: [
      'Practice on an empty stomach',
      'Avoid if you have high blood pressure',
      'Modify poses as needed'
    ]
  }
];