import React from 'react';
import FlowerOfLife from '../components/FlowerOfLife';
import { Calendar, Clock, Music } from 'lucide-react';
import TestimonialScroller from '../components/TestimonialScroller';
import ContactForm from '../components/ContactForm';

export default function Services() {
  const services = [
    {
      title: "1:1 Reiki Energy",
      durations: [
        { length: "60 minutes", price: "$70" }
      ],
      description: "Personalized Reiki energy session to balance your chakras and restore harmony."
    },
    {
      title: "Crystal Sound Bowl Bath",
      durations: [
        { length: "60 minutes", price: "$60" }
      ],
      description: "Immerse yourself in the healing vibrations of crystal singing bowls for deep relaxation and chakra alignment.",
      icon: Music
    },
    {
      title: "1:1 Guided Meditation",
      durations: [
        { length: "30 minutes", price: "$30" }
      ],
      description: "Personalized guided meditation sessions focusing on different aspects of spiritual growth."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-green-800 text-white relative">
      <FlowerOfLife />
      <div className="relative pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                {service.durations.map((duration, i) => (
                  <div key={i} className="flex justify-between items-center mb-2 text-green-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>{duration.length}</span>
                    </div>
                    <span className="text-xl">{duration.price}</span>
                  </div>
                ))}
                <a
                  href="https://calendly.com/connectedinnergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-green-400 text-gray-900 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-300 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Now</span>
                </a>
              </div>
            ))}
          </div>
          
          <TestimonialScroller />

          <div className="mt-16">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}