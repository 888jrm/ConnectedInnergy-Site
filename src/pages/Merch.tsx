import React from 'react';
import FlowerOfLife from '../components/FlowerOfLife';
import { ShoppingBag } from 'lucide-react';

export default function Merch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white relative">
      <FlowerOfLife />
      <div className="relative pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <ShoppingBag className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-6">Connected Innergy Collection</h1>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-2xl mx-auto">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=800"
                  alt="Person meditating"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Visit Our Shop</h2>
              <p className="text-gray-300 mb-6">
                Explore the Connected Innergy collection, where you'll find a thoughtfully curated selection of spiritual garments and resources, each designed to support and enhance your journey. Discover unique pieces that resonate with your soul and elevate your spiritual practice. Visit us today and begin your path to deeper connection and inner peace.
              </p>
              <a
                href="https://www.etsy.com/shop/connectedinnergy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-green-300 transition-colors text-lg font-semibold"
              >
                <ShoppingBag className="w-6 h-6" />
                <span>Visit Our Etsy Shop</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}