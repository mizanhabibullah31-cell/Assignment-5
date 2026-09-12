import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg brand-gradient flex items-center justify-center text-white font-bold text-xs">
                DS
              </div>
              <span className="font-bold text-lg text-gray-900">Dev Stack</span>
            </div>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern web software.
            </p>
            <div className="flex space-x-4 text-gray-400 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-700">
                <FaGithub size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-700">
                <FaTwitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-700">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-medium">
              <li><a href="#home" className="hover:text-gray-900">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-medium">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          {/* Links: Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-medium">
              <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-gray-600">Privacy</a>
            <a href="#terms" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;