import React from 'react';
import FlowerOfLife from '../components/FlowerOfLife';
import HomeHero from '../components/HomeHero';
import ServicePreview from '../components/ServicePreview';
import ChatBot from '../components/ChatBot/ChatBot';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white relative overflow-hidden">
      <FlowerOfLife />
      <ChatBot />
      <div className="relative pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <HomeHero />
          <ServicePreview />
          
          {/* About Section */}
          <div className="mt-24 bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">About Connected Innergy</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                At Connected Innergy, we believe in the transformative power of connection—connection to ourselves, 
                each other, and the universal energy that flows through all life. Our mission is to awaken the 
                spirit and guide individuals on their journey to discovering their highest self. Together, we create 
                a vibrant and supportive community where inner peace, harmony, and spiritual growth thrive.
              </p>
              <p>
                We are a collective of gifted individuals: intuitives, Reiki masters, meditators, yogis, spiritual 
                guides, and energy healers. United by our shared purpose, we offer holistic practices and teachings 
                to empower others to embrace their unique paths. Whether you are seeking clarity, healing, or 
                self-discovery, Connected Innergy is here to guide and support you every step of the way.
              </p>
              <p>
                Together, we embody what it means to be Connected Innergy. Join us in creating a world where 
                wellness and spiritual transformation are accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}