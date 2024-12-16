import React from 'react';
import { Instagram, Heart } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">Connect With Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <a
          href="https://www.instagram.com/connectedinnergy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Instagram className="w-8 h-8 text-green-400" />
          <div>
            <h3 className="font-semibold text-green-400">Instagram</h3>
            <p className="text-gray-300">@connectedinnergy</p>
          </div>
        </a>
        
        <a
          href="https://www.patreon.com/connectedinnergy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Heart className="w-8 h-8 text-green-400" />
          <div>
            <h3 className="font-semibold text-green-400">Support on Patreon</h3>
            <p className="text-gray-300">@connectedinnergy</p>
          </div>
        </a>
      </div>
      
      <div className="mt-6 text-center text-gray-300">
        <p>Join our Patreon community for exclusive meditation content, early access to new videos, and special member-only sessions! 🧘‍♀️✨</p>
      </div>
    </div>
  );
}