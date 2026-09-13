import React, { useState } from "react";

export default function Navbar(): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
        
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              DS
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900">
              Dev<span className="text-pink-600">Stack</span>
            </span>
          </div>

         
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a href="#home" className="text-pink-600 font-bold hover:text-pink-700 transition-colors">
              Home
            </a>
            <a href="#technologies" className="text-slate-600 hover:text-slate-900 transition-colors">
              Technologies
            </a>
            <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </a>
          </div>

          
          <div className="hidden sm:flex items-center space-x-6 text-sm font-semibold">
            <a href="#signin" className="text-slate-700 hover:text-slate-900 transition-colors">
              Sign In
            </a>
            <a
              href="#signup"
              className="px-6 py-2.5 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-pink-600 text-white font-semibold shadow-md hover:opacity-95 transition-all"
            >
              Sign Up
            </a>
          </div>

          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pt-2 pb-6 space-y-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-pink-600 font-bold">
            Home
          </a>
          <a href="#technologies" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-slate-900">
            Technologies
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-slate-900">
            Projects
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-slate-900">
            About
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-slate-900">
            Contact
          </a>
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <a href="#signin" onClick={() => setIsOpen(false)} className="text-slate-700 text-center font-semibold">
              Sign In
            </a>
            <a
              href="#signup"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-6 py-2.5 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-pink-600 text-white font-semibold shadow-md"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}