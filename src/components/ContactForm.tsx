import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
      <div className="flex items-center space-x-2 mb-6">
        <Mail className="w-6 h-6 text-green-400" />
        <h3 className="text-xl font-semibold">Contact Us</h3>
      </div>
      <p className="mb-4 text-gray-300">
        Email us at{' '}
        <a href="mailto:admin@connectedinnergy.com" className="text-green-400 hover:text-green-300">
          admin@connectedinnergy.com
        </a>
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input type="text" id="name" className="w-full bg-white/5 rounded-lg px-4 py-2 text-white" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input type="email" id="email" className="w-full bg-white/5 rounded-lg px-4 py-2 text-white" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea id="message" rows={4} className="w-full bg-white/5 rounded-lg px-4 py-2 text-white"></textarea>
        </div>
        <button type="submit" className="bg-green-400 text-gray-900 px-6 py-2 rounded-lg hover:bg-green-300 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
}