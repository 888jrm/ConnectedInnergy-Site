import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <Link 
      to={link}
      className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-colors"
    >
      <h3 className="text-xl font-semibold mb-4 text-green-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </Link>
  );
}

export default function ServicePreview() {
  const services = [
    {
      title: "Meditation",
      description: "Access guided meditations and mindfulness practices",
      link: "/meditation"
    },
    {
      title: "Community",
      description: "Join our vibrant community of like-minded individuals",
      link: "/community"
    },
    {
      title: "Services",
      description: "Explore our range of healing and wellness services",
      link: "/services"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-16">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}