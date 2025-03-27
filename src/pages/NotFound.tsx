
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-bold text-neon-green mb-4">404</h1>
        <p className="text-2xl mb-8">Página não encontrada</p>
        <Link to="/" className="bg-neon-green text-neon-black px-6 py-2 rounded-md hover:bg-neon-green/80 transition-colors">
          Voltar para o início
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
