import React from 'react';
import type { YogaPose } from '../../data/yogaPoses';

interface YogaPoseCardProps {
  pose: YogaPose;
  onClick: (pose: YogaPose) => void;
}

export default function YogaPoseCard({ pose, onClick }: YogaPoseCardProps) {
  const Icon = pose.icon;
  
  return (
    <div 
      className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden hover:bg-white/20 transition-all cursor-pointer"
      onClick={() => onClick(pose)}
    >
      <div className="relative h-48">
        <img 
          src={pose.image} 
          alt={pose.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">{pose.name}</h3>
          <p className="text-sm text-green-400">{pose.sanskritName}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon className="w-5 h-5 text-green-400" />
          <span className="text-sm text-gray-300">{pose.difficulty}</span>
          <span className="text-sm text-gray-300">• {pose.duration}</span>
        </div>
        <p className="text-gray-300 text-sm">{pose.description}</p>
      </div>
    </div>
  );
}