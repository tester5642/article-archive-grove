
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <ParticleBackground />
      <Header />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
