import React from 'react';
import { SocialLinks } from './SocialLinks';
import { Copyright } from './Copyright';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#457745',
      backgroundImage: 'linear-gradient(160deg, #457745 0%, #80D0C7 100%)'
    }} className="text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Suivez-nous</h3>
            <SocialLinks />
          </div>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};