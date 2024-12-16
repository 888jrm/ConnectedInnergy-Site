import React, { useState } from 'react';
import FlowerOfLife from '../components/FlowerOfLife';
import { Book, Youtube, ExternalLink } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import ReadingListModal from '../components/resources/ReadingListModal';

export default function Resources() {
  const [showReadingList, setShowReadingList] = useState(false);

  const resources = [
    {
      title: "Beginner's Guide to Meditation",
      type: "E-Book",
      description: "A comprehensive guide for starting your meditation journey",
      icon: Book
    },
    {
      title: "Connected Innergy YouTube Channel",
      type: "Video Content",
      description: "Access our full library of meditation and spiritual growth videos",
      icon: Youtube,
      link: "https://www.youtube.com/@connectedinnergy"
    },
    {
      title: "Recommended Reading List",
      type: "External Resource",
      description: "Curated list of books for spiritual growth",
      icon: Book,
      onClick: () => setShowReadingList(true)
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white relative">
      <FlowerOfLife />
      <div className="relative pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Learning Resources</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-400 p-3 rounded-lg text-gray-900">
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <span className="text-green-400 text-sm mb-2 block">{resource.type}</span>
                    <p className="text-gray-300">{resource.description}</p>
                    {resource.link ? (
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-green-400 hover:text-green-300 transition-colors inline-flex items-center space-x-2"
                      >
                        <span>Visit Channel</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : resource.onClick ? (
                      <button 
                        onClick={resource.onClick}
                        className="mt-4 text-green-400 hover:text-green-300 transition-colors"
                      >
                        View Reading List →
                      </button>
                    ) : (
                      <button className="mt-4 text-green-400 hover:text-green-300 transition-colors">
                        Learn More →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <SocialLinks />
          </div>
        </div>
      </div>

      {showReadingList && <ReadingListModal onClose={() => setShowReadingList(false)} />}
    </div>
  );
}