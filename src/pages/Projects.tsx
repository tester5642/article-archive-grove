
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { ExternalLink, Github } from 'lucide-react';

// Mock data for projects
const projects = [
  { 
    id: 1, 
    title: "Análise de Dados COVID-19", 
    description: "Análise exploratória de dados relacionados à pandemia de COVID-19, utilizando Python, Pandas e Matplotlib.", 
    url: "https://github.com/username/covid-data-analysis",
    tags: ["Python", "Pandas", "Data Analysis", "Visualization"]
  },
  { 
    id: 2, 
    title: "Dashboard de Vendas", 
    description: "Dashboard interativo para visualização de dados de vendas, desenvolvido com React e D3.js.", 
    url: "https://github.com/username/sales-dashboard",
    tags: ["React", "D3.js", "Dashboard", "Data Visualization"]
  },
  { 
    id: 3, 
    title: "API de Machine Learning", 
    description: "API REST para inferência de modelos de machine learning, construída com FastAPI e scikit-learn.", 
    url: "https://github.com/username/ml-api",
    tags: ["Python", "FastAPI", "Machine Learning", "scikit-learn"]
  },
  { 
    id: 4, 
    title: "Visualização de Redes Neurais", 
    description: "Ferramenta para visualização interativa da estrutura e funcionamento de redes neurais artificiais.", 
    url: "https://github.com/username/neural-networks-viz",
    tags: ["JavaScript", "TensorFlow.js", "Neural Networks", "Interactive Visualization"]
  },
  { 
    id: 5, 
    title: "Sistema de Recomendação", 
    description: "Sistema de recomendação baseado em filtragem colaborativa para uma plataforma de e-commerce.", 
    url: "https://github.com/username/recommendation-system",
    tags: ["Python", "Collaborative Filtering", "Recommender Systems", "Machine Learning"]
  }
];

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero 
          title="Projetos" 
          description="Conheça os principais projetos de dados e análises que desenvolvi. Todos os códigos estão disponíveis no GitHub para que você possa explorar e aprender."
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div 
                key={project.id}
                className="bg-neon-dark border border-neon-green/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-neon-green/60 hover:shadow-[0_0_15px_rgba(170,255,0,0.2)] p-6"
              >
                <h3 className="text-xl font-semibold text-neon-green mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 rounded bg-neon-green/10 text-neon-green"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-neon-green transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    <span>Ver no GitHub</span>
                  </a>
                  
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-neon-green transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
