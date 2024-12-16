import React from 'react';
import FlowerOfLife from '../components/FlowerOfLife';
import { MessageCircle, Users, Share2 } from 'lucide-react';

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative">
      <FlowerOfLife />
      <div className="relative pt-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Join Our Discord Community</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-12">
            <div className="flex justify-center mb-6">
              <MessageCircle className="w-16 h-16 text-yellow-300" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Connect with Like-minded Souls</h2>
            <p className="text-gray-300 mb-8">
              Join our vibrant Discord community where you can connect with fellow spiritual seekers,
              share experiences, and grow together on your journey.
            </p>
            <a
              href="https://discord.gg/connectedinnergy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-300 text-indigo-900 px-8 py-3 rounded-lg inline-flex items-center space-x-2 hover:bg-yellow-400 transition-colors"
            >
              <span>Join Discord</span>
              <Share2 className="w-5 h-5" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community Features</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Daily meditation sessions</li>
                <li>Group discussions</li>
                <li>Resource sharing</li>
                <li>Event announcements</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <MessageCircle className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community Guidelines</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Be respectful and kind</li>
                <li>Support each other</li>
                <li>Share positive energy</li>
                <li>Maintain sacred space</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}