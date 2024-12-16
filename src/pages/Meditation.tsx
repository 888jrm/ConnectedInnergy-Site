import React, { useState } from 'react';
import FlowerOfLife from '../components/FlowerOfLife';
import { Play, Heart, Youtube, BookOpen } from 'lucide-react';
import LearnMoreModal from '../components/meditation/LearnMoreModal';

export default function Meditation() {
  const [showLearnMore, setShowLearnMore] = useState(false);

  const videos = [
    {
      title: "Calming Waters Meditation By Connected Innergy",
      duration: "15 min",
      thumbnail: "https://i3.ytimg.com/vi/l5TGkZl1HmY/maxresdefault.jpg",
      videoUrl: "https://youtu.be/l5TGkZl1HmY"
    },
    {
      title: "Deep Relaxation Journey",
      duration: "30 min",
      thumbnail: "https://i3.ytimg.com/vi/BKLvGdGyBQw/maxresdefault.jpg",
      videoUrl: "https://youtu.be/BKLvGdGyBQw"
    },
    {
      title: "A Forest Walk",
      duration: "45 min",
      thumbnail: "https://i3.ytimg.com/vi/gE0Ebe-4W7s/maxresdefault.jpg",
      videoUrl: "https://youtu.be/gE0Ebe-4W7s"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white relative">
      <FlowerOfLife />
      <div className="relative pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <button 
              onClick={() => setShowLearnMore(true)}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-lg hover:bg-white/20 transition-colors mb-6"
            >
              <BookOpen className="w-6 h-6 text-green-400" />
              <span>Learn More About Meditation</span>
            </button>

            <a 
              href="https://www.youtube.com/@connectedinnergy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-lg hover:bg-white/20 transition-colors ml-4"
            >
              <Youtube className="w-6 h-6 text-green-400" />
              <span>Visit our YouTube Channel</span>
            </a>
          </div>

          <h1 className="text-4xl font-bold mb-8 text-center">Meditation Videos</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    {video.videoUrl ? (
                      <a 
                        href={video.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-400 text-gray-900 p-3 rounded-full hover:bg-green-300 transition-colors"
                      >
                        <Play className="w-6 h-6" />
                      </a>
                    ) : (
                      <button className="bg-green-400 text-gray-900 p-3 rounded-full">
                        <Play className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{video.duration}</span>
                    <button className="text-gray-300 hover:text-green-400">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showLearnMore && <LearnMoreModal onClose={() => setShowLearnMore(false)} />}
    </div>
  );
}