import React, { useState } from 'react';
import FlowerOfLife from '../components/FlowerOfLife';
import YogaPoseCard from '../components/yoga/YogaPoseCard';
import YogaPoseModal from '../components/yoga/YogaPoseModal';
import { yogaPoses, YogaPose } from '../data/yogaPoses';
import { Flower } from 'lucide-react';

export default function Yoga() {
  const [selectedPose, setSelectedPose] = useState<YogaPose | null>(null);
  const [filter, setFilter] = useState<'all' | 'Beginner' | 'Intermediate' | 'Advanced'>('all');

  const filteredPoses = yogaPoses.filter(
    pose => filter === 'all' || pose.difficulty === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white relative">
      <FlowerOfLife />
      <div className="relative pt-24 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Flower className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Yoga Practice</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore various yoga poses to enhance your physical and spiritual well-being. 
              Each pose is designed to bring balance, strength, and peace to your practice.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white/10 backdrop-blur-lg rounded-lg p-1">
              {(['all', 'Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === level
                      ? 'bg-green-400 text-gray-900'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {level === 'all' ? 'All Levels' : level}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPoses.map((pose) => (
              <YogaPoseCard
                key={pose.id}
                pose={pose}
                onClick={setSelectedPose}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedPose && (
        <YogaPoseModal
          pose={selectedPose}
          onClose={() => setSelectedPose(null)}
        />
      )}
    </div>
  );
}