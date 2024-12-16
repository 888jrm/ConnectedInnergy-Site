import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GiftCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  signs: string[];
  enhancement: string;
}

export default function GiftCard({ title, icon: Icon, description, signs, enhancement }: GiftCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-green-400 p-2 rounded-lg">
          <Icon className="w-6 h-6 text-gray-900" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="space-y-2">
        <h4 className="font-semibold text-green-400">Common Signs:</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {signs.map((sign, i) => (
            <li key={i}>{sign}</li>
          ))}
        </ul>
        <h4 className="font-semibold text-green-400 mt-4">Enhancement Tools:</h4>
        <p className="text-gray-300">{enhancement}</p>
      </div>
    </div>
  );
}