
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-neon-dark border-t border-neon-green/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <a 
              href="https://github.com/username" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neon-green transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/username" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neon-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:email@example.com" 
              className="text-white hover:text-neon-green transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-white/70">
            &copy; {currentYear} Copyright Matheus Nascimento. All the rigths reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
