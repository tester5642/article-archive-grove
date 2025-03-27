import React from 'react';
import Layout from '../components/Layout';

const Resume: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-neon-green mb-8">Meu Currículo</h1>
        <div className="bg-neon-dark p-6 rounded-xl border border-neon-green/30">
          {/* Conteúdo do currículo */}
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
