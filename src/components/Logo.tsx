import React from 'react';
import SeedOfLife from './SeedOfLife';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 text-green-400">
        <SeedOfLife />
      </div>
      <span className="bg-gradient-to-r from-green-400 via-blue-400 to-white text-transparent bg-clip-text font-semibold text-xl">
        Connected Innergy
      </span>
    </div>
  );
}