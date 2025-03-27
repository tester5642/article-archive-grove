
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

// Mock data for projects and articles
const projects = [
  { id: 1, title: "Análise de Dados COVID-19", url: "https://github.com/username/covid-data-analysis" },
  { id: 2, title: "Dashboard de Vendas", url: "https://github.com/username/sales-dashboard" },
  { id: 3, title: "API de Machine Learning", url: "https://github.com/username/ml-api" },
  { id: 4, title: "Visualização de Redes Neurais", url: "https://github.com/username/neural-networks-viz" },
  { id: 5, title: "Sistema de Recomendação", url: "https://github.com/username/recommendation-system" }
];

const articles = [
  { id: 1, title: "Introdução a Data Science", slug: "intro-data-science" },
  { id: 2, title: "Python para Análise de Dados", slug: "python-data-analysis" },
  { id: 3, title: "Machine Learning Explicado", slug: "machine-learning-explained" },
  { id: 4, title: "Visualização de Dados com D3.js", slug: "data-viz-d3js" },
  { id: 5, title: "Estatística para Cientistas de Dados", slug: "statistics-for-data-scientists" }
];

const Header: React.FC = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  
  // Function to handle dropdown toggle
  const toggleDropdown = (dropdown: 'projects' | 'articles') => {
    if (dropdown === 'projects') {
      setProjectsOpen(!projectsOpen);
      setArticlesOpen(false);
    } else {
      setArticlesOpen(!articlesOpen);
      setProjectsOpen(false);
    }
  };
  
  // Function to close dropdowns
  const closeDropdowns = () => {
    setProjectsOpen(false);
    setArticlesOpen(false);
  };
  
  return (
    <header className="bg-neon-dark border-b border-neon-green/30 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-neon-green hover:text-white transition-colors" onClick={closeDropdowns}>
            <Home size={24} />
          </Link>
          
          <div className="flex items-center space-x-10">
            <div className="relative">
              <button 
                className={`text-neon-green hover:text-white transition-colors ${projectsOpen ? 'text-white' : ''}`}
                onClick={() => toggleDropdown('projects')}
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setTimeout(() => setProjectsOpen(false), 300)}
              >
                Projetos
              </button>
              
              {projectsOpen && (
                <div 
                  className="dropdown-menu"
                  onMouseEnter={() => setProjectsOpen(true)}
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  {projects.map(project => (
                    <a 
                      key={project.id}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm hover:bg-neon-green/10 text-white hover:text-neon-green transition-colors"
                    >
                      {project.title}
                    </a>
                  ))}
                  <Link 
                    to="/projetos"
                    className="block px-4 py-2 text-sm font-semibold hover:bg-neon-green/10 text-neon-green transition-colors mt-1 border-t border-neon-green/20"
                    onClick={closeDropdowns}
                  >
                    Ver todos os projetos
                  </Link>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                className={`text-neon-green hover:text-white transition-colors ${articlesOpen ? 'text-white' : ''}`}
                onClick={() => toggleDropdown('articles')}
                onMouseEnter={() => setArticlesOpen(true)}
                onMouseLeave={() => setTimeout(() => setArticlesOpen(false), 300)}
              >
                Artigos
              </button>
              
              {articlesOpen && (
                <div 
                  className="dropdown-menu"
                  onMouseEnter={() => setArticlesOpen(true)}
                  onMouseLeave={() => setArticlesOpen(false)}
                >
                  {articles.map(article => (
                    <Link 
                      key={article.id}
                      to={`/artigos/${article.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-neon-green/10 text-white hover:text-neon-green transition-colors"
                      onClick={closeDropdowns}
                    >
                      {article.title}
                    </Link>
                  ))}
                  <Link 
                    to="/artigos"
                    className="block px-4 py-2 text-sm font-semibold hover:bg-neon-green/10 text-neon-green transition-colors mt-1 border-t border-neon-green/20"
                    onClick={closeDropdowns}
                  >
                    Ver todos os artigos
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/curriculo" className="text-neon-green hover:text-white transition-colors" onClick={closeDropdowns}>
              Currículo
            </Link>
            
            <Link to="/sobre" className="text-neon-green hover:text-white transition-colors" onClick={closeDropdowns}>
              Sobre mim
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
