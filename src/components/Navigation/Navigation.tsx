import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { NavLink } from './NavLink';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#457745]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-white" />
            <span className="ml-2 text-white text-xl font-bold">Kitab</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#accueil">Accueil</NavLink>
            <NavLink href="#livres">Livres</NavLink>
            <NavLink href="#apropos">À Propos</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 pb-4">
              <NavLink href="#accueil">Accueil</NavLink>
              <NavLink href="#livres">Livres</NavLink>
              <NavLink href="#apropos">À Propos</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};