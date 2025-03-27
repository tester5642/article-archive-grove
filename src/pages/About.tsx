
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Code, Database, BookOpen, Medal, GitFork } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero 
          title="Sobre mim" 
          description="Conheça um pouco mais sobre minha trajetória, interesses e o que me motiva no mundo dos dados e tecnologia."
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Seção principal */}
            <div className="bg-neon-dark border border-neon-green/30 rounded-xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-neon-green mb-6">Quem sou eu</h2>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Olá! Sou Matheus Nascimento, um apaixonado por dados e tecnologia. Minha jornada começou durante 
                  a graduação em Sistemas de Informação, quando descobri o poder de transformar dados em insights 
                  valiosos e decisões estratégicas.
                </p>
                
                <p>
                  Ao longo dos anos, tenho trabalhado em diversos projetos que envolvem análise de dados, machine learning 
                  e visualização de informações. Acredito no potencial dos dados para resolver problemas complexos e 
                  melhorar a vida das pessoas.
                </p>
                
                <p>
                  Atualmente, dedico meu tempo a explorar técnicas avançadas de machine learning, especialmente em 
                  processamento de linguagem natural e visão computacional. Também gosto de compartilhar conhecimento 
                  através de artigos, palestras e contribuições para projetos de código aberto.
                </p>
                
                <p>
                  Além do mundo dos dados, tenho interesse em tecnologias web, desenvolvimento de software e design de 
                  interfaces. Acredito que a combinação dessas áreas é fundamental para criar soluções completas e eficazes.
                </p>
              </div>
            </div>
            
            {/* Áreas de especialidade */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-neon-dark border border-neon-green/30 rounded-xl p-6 hover:border-neon-green/60 hover:shadow-[0_0_15px_rgba(170,255,0,0.2)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Database size={24} className="text-neon-green mr-3" />
                  <h3 className="text-xl font-semibold text-neon-green">Ciência de Dados</h3>
                </div>
                <p className="text-white/80">
                  Análise exploratória, visualização, modelagem estatística e extração de insights de 
                  conjuntos de dados complexos para apoiar decisões de negócios.
                </p>
              </div>
              
              <div className="bg-neon-dark border border-neon-green/30 rounded-xl p-6 hover:border-neon-green/60 hover:shadow-[0_0_15px_rgba(170,255,0,0.2)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Code size={24} className="text-neon-green mr-3" />
                  <h3 className="text-xl font-semibold text-neon-green">Machine Learning</h3>
                </div>
                <p className="text-white/80">
                  Desenvolvimento e implementação de algoritmos de aprendizado de máquina para 
                  previsão, classificação e clustering de dados em diferentes domínios.
                </p>
              </div>
              
              <div className="bg-neon-dark border border-neon-green/30 rounded-xl p-6 hover:border-neon-green/60 hover:shadow-[0_0_15px_rgba(170,255,0,0.2)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <BookOpen size={24} className="text-neon-green mr-3" />
                  <h3 className="text-xl font-semibold text-neon-green">Educação em Dados</h3>
                </div>
                <p className="text-white/80">
                  Compartilhamento de conhecimento através de artigos, tutoriais e mentorias para 
                  ajudar outras pessoas a ingressar e evoluir no mundo dos dados.
                </p>
              </div>
              
              <div className="bg-neon-dark border border-neon-green/30 rounded-xl p-6 hover:border-neon-green/60 hover:shadow-[0_0_15px_rgba(170,255,0,0.2)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <GitFork size={24} className="text-neon-green mr-3" />
                  <h3 className="text-xl font-semibold text-neon-green">Código Aberto</h3>
                </div>
                <p className="text-white/80">
                  Contribuição para projetos open source relacionados a ferramentas de análise de dados, 
                  bibliotecas de machine learning e visualização.
                </p>
              </div>
            </div>
            
            {/* Valores e princípios */}
            <div className="bg-neon-dark border border-neon-green/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neon-green mb-6">Valores e princípios</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <Medal className="text-neon-green" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Aprendizado contínuo</h3>
                    <p className="text-white/80">
                      Acredito que nunca devemos parar de aprender. O campo de dados e tecnologia evolui rapidamente, 
                      e manter-se atualizado é fundamental para oferecer as melhores soluções.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Medal className="text-neon-green" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Transparência e ética</h3>
                    <p className="text-white/80">
                      Trabalho com dados de forma ética e responsável, respeitando a privacidade e sendo transparente 
                      sobre as limitações e implicações das análises e modelos.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Medal className="text-neon-green" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Colaboração e compartilhamento</h3>
                    <p className="text-white/80">
                      Acredito no poder da colaboração e no compartilhamento de conhecimento para avançar 
                      coletivamente no campo da ciência de dados e tecnologia.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Medal className="text-neon-green" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Foco na solução</h3>
                    <p className="text-white/80">
                      Mais do que usar tecnologias avançadas, busco encontrar a solução mais adequada para cada problema, 
                      mantendo o equilíbrio entre complexidade e eficácia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
