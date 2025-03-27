
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Download, Calendar, MapPin, Mail, Phone, Laptop, GraduationCap, BriefcaseBusiness } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero 
          title="Currículo" 
          description="Conheça minha formação, experiência profissional e habilidades técnicas na área de dados e tecnologia."
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="bg-neon-dark border border-neon-green/30 rounded-xl p-8 max-w-4xl mx-auto">
            {/* Header do currículo */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-neon-green mb-3">Matheus Nascimento</h2>
              <p className="text-xl text-white/80 mb-6">Cientista de Dados & Engenheiro de Machine Learning</p>
              
              <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1 text-neon-green" />
                  <span>São Paulo, SP</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-1 text-neon-green" />
                  <span>email@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-1 text-neon-green" />
                  <span>(11) 99999-9999</span>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-neon-green/10 text-neon-green border border-neon-green/30 rounded-md hover:bg-neon-green/20 transition-colors"
                >
                  <Download size={16} className="mr-2" />
                  <span>Baixar CV em PDF</span>
                </a>
              </div>
            </div>
            
            {/* Sobre */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-neon-green mb-4 border-b border-neon-green/30 pb-2">Sobre mim</h3>
              <p className="text-white/80 leading-relaxed">
                Profissional com mais de 5 anos de experiência em ciência de dados e machine learning, especializado em 
                desenvolver soluções de análise avançada para problemas complexos de negócios. Tenho expertise em Python, 
                SQL, modelagem estatística e técnicas de machine learning, com foco em transformar dados em insights 
                acionáveis e implementar modelos em produção.
              </p>
            </div>
            
            {/* Experiência Profissional */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-neon-green mb-4 border-b border-neon-green/30 pb-2">
                <BriefcaseBusiness size={18} className="inline-block mr-2" />
                Experiência Profissional
              </h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-white">Cientista de Dados Sênior</h4>
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>Jan 2022 - Presente</span>
                    </div>
                  </div>
                  <p className="text-neon-green/80 text-sm mb-2">Empresa XYZ</p>
                  <ul className="list-disc list-inside text-white/80 space-y-1">
                    <li>Liderança de projetos de machine learning para previsão de demanda e detecção de fraudes.</li>
                    <li>Desenvolvimento e implementação de algoritmos de aprendizado profundo para análise de imagens.</li>
                    <li>Criação de dashboards e relatórios para stakeholders de negócios.</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-white">Analista de Dados</h4>
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>Mar 2019 - Dez 2021</span>
                    </div>
                  </div>
                  <p className="text-neon-green/80 text-sm mb-2">Empresa ABC</p>
                  <ul className="list-disc list-inside text-white/80 space-y-1">
                    <li>Análise exploratória de dados de vendas e comportamento do cliente.</li>
                    <li>Desenvolvimento de modelos de segmentação de clientes e personalização.</li>
                    <li>Otimização de consultas SQL para melhorar o desempenho de relatórios.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Formação Acadêmica */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-neon-green mb-4 border-b border-neon-green/30 pb-2">
                <GraduationCap size={18} className="inline-block mr-2" />
                Formação Acadêmica
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-white">Mestrado em Ciência da Computação</h4>
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>2017 - 2019</span>
                    </div>
                  </div>
                  <p className="text-neon-green/80 text-sm">Universidade Federal de São Paulo</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-white">Bacharelado em Sistemas de Informação</h4>
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>2013 - 2017</span>
                    </div>
                  </div>
                  <p className="text-neon-green/80 text-sm">Universidade de São Paulo</p>
                </div>
              </div>
            </div>
            
            {/* Habilidades */}
            <div>
              <h3 className="text-xl font-semibold text-neon-green mb-4 border-b border-neon-green/30 pb-2">
                <Laptop size={18} className="inline-block mr-2" />
                Habilidades Técnicas
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Linguagens de Programação</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'R', 'SQL', 'JavaScript', 'Java'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Ferramentas de Análise</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'PyTorch', 'Spark'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Visualização de Dados</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Matplotlib', 'Seaborn', 'Plotly', 'D3.js', 'Tableau', 'Power BI'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Bancos de Dados</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
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

export default Resume;
