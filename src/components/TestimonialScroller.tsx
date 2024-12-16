import React, { useEffect, useRef, useState } from 'react';
import Testimonial from './Testimonial';
import { testimonials } from '../data/testimonials';

export default function TestimonialScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % testimonials.length;
          scrollRef.current?.scrollTo({
            left: nextIndex * scrollRef.current.clientWidth,
            behavior: 'smooth'
          });
          return nextIndex;
        });
      }
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">What Our Clients Say</h2>
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <div className="px-4">
                <Testimonial {...testimonial} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-green-400' : 'bg-white/20'
              }`}
              onClick={() => {
                setCurrentIndex(index);
                scrollRef.current?.scrollTo({
                  left: index * scrollRef.current.clientWidth,
                  behavior: 'smooth'
                });
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}