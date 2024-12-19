import React from 'react';

export const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="text-center md:text-right">
      <p className="text-gray-200">
        © {currentYear} Kitab. All rights reserved.
      </p>
    </div>
  );
};