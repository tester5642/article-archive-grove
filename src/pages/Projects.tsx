import React from 'react';
import Layout from '../components/Layout';

const Projects: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-neon-green mb-8">Meus Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Conteúdo da página de projetos */}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
