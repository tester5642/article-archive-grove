
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero 
        title="Olá, tudo bem?" 
        description="Seja muito bem-vindo ao meu portfólio! Aqui você poderá encontrar todos os projetos voltados à área de dados em que já trabalhei, além dos assuntos que ando estudando no momento, espero que goste."
      />
    </Layout>
  );
};

export default Index;
