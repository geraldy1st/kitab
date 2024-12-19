import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-white hover:text-gray-200 px-4 py-2 rounded-md transition-colors"
    >
      {children}
    </a>
  );
};