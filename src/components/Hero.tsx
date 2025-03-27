
import React from 'react';

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <div className="min-h-[500px] flex items-center justify-center py-20 relative overflow-hidden">
      <div className="network-bg absolute inset-0"></div>
      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <h1 className="text-neon-green text-4xl font-bold mb-6 animate-fade-in">{title}</h1>
        <div className="bg-neon-dark/80 p-6 rounded-xl border border-neon-green/30 glowing-border backdrop-blur-sm animate-fade-down">
          <p className="text-white text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
