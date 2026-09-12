import React from "react";

export default function Navbar(): React.ReactNode {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              DS
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900">
              Dev<span className="text-pink-600">Stack</span>
            </span>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a
              href="#home"
              className="text-pink-600 font-bold hover:text-pink-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#technologies"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Technologies
            </a>
            <a
              href="#projects"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-6 text-sm font-semibold">
            <a
              href="#signin"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="px-6 py-2.5 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-pink-600 text-white font-semibold shadow-md hover:opacity-95 transition-all"
            >
              Sign Up
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}