import React from 'react';
import { Github, Linkedin } from 'lucide-react';

// Custom X (Twitter) icon component to match Lucide React style
const XIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l7.2 7.2M4 20l16-16M12.8 12.8L20 20" />
  </svg>
);

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  hoverColor: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <XIcon size={24} />,
    href: "https://twitter.com/yourusername",
    hoverColor: "hover:text-blue-400"
  },
  {
    icon: <Github size={24} />,
    href: "https://github.com/yourusername",
    hoverColor: "hover:text-gray-400"
  },
  {
    icon: <Linkedin size={24} />,
    href: "https://linkedin.com/in/yourusername",
    hoverColor: "hover:text-blue-600"
  }
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-4">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href}
          className={`${link.hoverColor} transition-colors`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};