import React from 'react';
import { X } from 'lucide-react';
import type { YogaPose } from '../../data/yogaPoses';

interface YogaPoseModalProps {
  pose: YogaPose;
  onClose: () => void;
}

export default function YogaPoseModal({ pose, onClose }: YogaPoseModalProps) {
  const Icon = pose.icon;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-green-900/95 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-green-900/95 p-4 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon className="w-6 h-6 text-green-400" />
            <div>
              <h2 className="text-xl font-semibold">{pose.name}</h2>
              <p className="text-green-400">{pose.sanskritName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <img 
            src={pose.image} 
            alt={pose.name} 
            className="w-full h-64 object-cover rounded-lg"
          />

          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-300">{pose.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {pose.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Steps</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              {pose.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {pose.cautions && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Cautions</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {pose.cautions.map((caution, index) => (
                  <li key={index}>{caution}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}