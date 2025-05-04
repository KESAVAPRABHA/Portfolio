import React from 'react';
import { Github as GitHub, Linkedin, Mail, PhoneCall, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Kesava Prabha L</h2>
            <p className="text-gray-400 mt-2">Software Engineer</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://github.com/KESAVAPRABHA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/kesava-prabha-l"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:kesavaprabha2005@gmail.com"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+918072468051"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="Phone"
            >
              <PhoneCall size={20} />
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kesava Prabha L. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;