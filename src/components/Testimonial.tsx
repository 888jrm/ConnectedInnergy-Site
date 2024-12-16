import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial as TestimonialType } from '../data/testimonials';

type TestimonialProps = TestimonialType;

export default function Testimonial({ text, author, rating }: TestimonialProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-300 italic mb-4 text-center text-lg">{text}</p>
      <p className="text-green-400 text-right">- {author}</p>
    </div>
  );
}