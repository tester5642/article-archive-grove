import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-neon-green mb-8">Sobre Mim</h1>
        <div className="bg-neon-dark p-6 rounded-xl border border-neon-green/30">
          {/* Conteúdo sobre mim */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
