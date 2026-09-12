import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Mobile Menu Toggle Icon (Left on Mobile) */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Brand Logo & Name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center text-white font-bold text-xs shadow-sm">
              DS
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Dev Stack
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              Sign In
            </button>
            <button className="brand-gradient text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm hover:opacity-95 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-2">
          <a href="#home" className="block py-2 text-gray-700 font-medium">Home</a>
          <a href="#technologies" className="block py-2 text-gray-700 font-medium">Technologies</a>
          <a href="#projects" className="block py-2 text-gray-700 font-medium">Projects</a>
          <a href="#about" className="block py-2 text-gray-700 font-medium">About</a>
          <a href="#contact" className="block py-2 text-gray-700 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;