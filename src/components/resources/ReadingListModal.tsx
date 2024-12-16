import React from 'react';
import { X, BookOpen, Heart, Compass, Sun, Moon, Sparkles, Brain, Leaf, Wind, Flame } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Book {
  title: string;
  author: string;
  description: string;
  icon: LucideIcon;
}

interface ReadingListModalProps {
  onClose: () => void;
}

export default function ReadingListModal({ onClose }: ReadingListModalProps) {
  const books: Book[] = [
    {
      title: "A Heart's Guide",
      author: "Jamila Malave",
      description: "A transformative journey through spiritual awakening and self-discovery.",
      icon: Heart
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A mystical story about following your dreams and listening to your heart.",
      icon: Compass
    },
    {
      title: "Autobiography of a Yogi",
      author: "Paramahansa Yogananda",
      description: "A spiritual classic introducing the science of Kriya Yoga meditation.",
      icon: Sun
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      description: "A guide to spiritual enlightenment through present-moment awareness.",
      icon: Sparkles
    },
    {
      title: "A New Earth",
      author: "Eckhart Tolle",
      description: "Awakening to your life's purpose through transcending ego-based consciousness.",
      icon: Leaf
    },
    {
      title: "The Four Agreements",
      author: "Don Miguel Ruiz",
      description: "Ancient Toltec wisdom for personal freedom and authentic happiness.",
      icon: Wind
    },
    {
      title: "Eastern Body, Western Mind",
      author: "Anodea Judith",
      description: "A comprehensive guide bridging Eastern chakra theory with Western psychology.",
      icon: Brain
    },
    {
      title: "The Untethered Soul",
      author: "Michael Alan Singer",
      description: "A journey beyond yourself to self-realization and inner freedom.",
      icon: Wind
    },
    {
      title: "Many Lives, Many Masters",
      author: "Brian Weiss",
      description: "A groundbreaking study of reincarnation and the wisdom of past-life memories.",
      icon: Moon
    },
    {
      title: "The Art of Living",
      author: "Thich Nhat Hanh",
      description: "Finding peace and freedom in the here and now through mindful living.",
      icon: Leaf
    },
    {
      title: "Meditation: The Ancient Egyptian Path to Enlightenment",
      author: "Muata Ashby",
      description: "Ancient Egyptian philosophy and practices for spiritual development.",
      icon: Flame
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-green-900/95 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-green-900/95 p-4 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-semibold">Recommended Reading</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <div key={index} className="bg-white/10 rounded-lg overflow-hidden p-4 flex items-start space-x-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <book.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-400">{book.title}</h3>
                <p className="text-sm text-gray-300 mb-2">by {book.author}</p>
                <p className="text-sm text-gray-300">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}