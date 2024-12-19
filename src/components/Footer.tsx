import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Connect With Me</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com/yourusername" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://github.com/yourusername" className="hover:text-gray-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};