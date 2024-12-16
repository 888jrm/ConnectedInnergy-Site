import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-green-900/95 text-white py-4 px-6 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
        
        <div className="flex space-x-8">
          <Link 
            to="/meditation" 
            className={`hover:text-green-400 transition-colors ${
              isActive('/meditation') ? 'text-green-400' : ''
            }`}
          >
            Meditation
          </Link>
          <Link 
            to="/spiritual-gifts" 
            className={`hover:text-green-400 transition-colors ${
              isActive('/spiritual-gifts') ? 'text-green-400' : ''
            }`}
          >
            Spiritual Gifts
          </Link>
          <Link 
            to="/community" 
            className={`hover:text-green-400 transition-colors ${
              isActive('/community') ? 'text-green-400' : ''
            }`}
          >
            Community
          </Link>
          <Link 
            to="/resources" 
            className={`hover:text-green-400 transition-colors ${
              isActive('/resources') ? 'text-green-400' : ''
            }`}
          >
            Resources
          </Link>
          <Link 
            to="/services" 
            className={`hover:text-green-400 transition-colors ${
              isActive('/services') ? 'text-green-400' : ''
            }`}
          >
            Services
          </Link>
          <Link 
            to="/merch" 
            className={`hover:text-green-400 transition-colors ${
              isActive('/merch') ? 'text-green-400' : ''
            }`}
          >
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
}