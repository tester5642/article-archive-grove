
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero 
          title="Olá, tudo bem?" 
          description="Seja muito bem-vindo ao meu portfólio! Aqui você poderá encontrar todos os projetos voltados à área de dados em que já trabalhei, além dos assuntos que ando estudando no momento, espero que goste."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
