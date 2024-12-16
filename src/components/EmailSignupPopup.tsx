import React, { useState, useEffect } from 'react';
import { Send, Sparkles, X } from 'lucide-react';
import useLocalStorage from '../hooks/useLocalStorage';
import SubscriptionForm from './SubscriptionForm';
import SuccessMessage from './SuccessMessage';

export default function EmailSignupPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { getValue, setValue } = useLocalStorage();

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = getValue('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [getValue]);

  const handleClose = () => {
    setIsOpen(false);
    setValue('hasSeenPopup', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-green-900/95 rounded-lg p-8 max-w-md w-full relative animate-fade-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="absolute top-0 right-0 opacity-10">
          <Sparkles className="w-32 h-32 text-green-400" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-center">Join Our Spiritual Journey</h2>
        <p className="text-gray-300 text-center mb-6">
          Subscribe to receive updates about new meditations, spiritual insights, and exclusive content.
        </p>

        <SubscriptionForm onClose={handleClose} />
      </div>
    </div>
  );
}