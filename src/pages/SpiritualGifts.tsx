import React from 'react';
import FlowerOfLife from '../components/FlowerOfLife';
import GiftCard from '../components/GiftCard';
import { Sparkles } from 'lucide-react';
import { spiritualGifts } from '../data/spiritualGifts';

export default function SpiritualGifts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white relative">
      <FlowerOfLife />
      <div className="relative pt-24 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Spiritual Gifts</h1>
            <p className="text-xl text-gray-300">
              Discover and understand the various spiritual gifts that may manifest in your journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiritualGifts.map((gift, index) => (
              <GiftCard key={index} {...gift} />
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
            <Sparkles className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Develop Your Gifts</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Remember that spiritual gifts often develop gradually and require patience, practice, and proper guidance. 
              Consider joining our community or booking a session with our experienced practitioners to help nurture your gifts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}