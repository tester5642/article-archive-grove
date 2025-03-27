
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  return (
    <header className="bg-neon-dark border-b border-neon-green/30 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="text-neon-green hover:text-white transition-colors">
            <Home size={24} />
          </Link>
          
          <div className="flex items-center space-x-10">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-neon-green hover:text-white transition-colors focus:outline-none">
                Projetos
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center"
                className="bg-neon-dark border border-neon-green rounded-md shadow-lg py-1 w-[250px] max-h-[200px] overflow-y-auto"
                sideOffset={5}
              >
                <div className="custom-scrollbar">
                  {projects.map(project => (
                    <DropdownMenuItem key={project.id} className="px-0 py-0 focus:bg-transparent">
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-4 py-2 text-sm hover:bg-neon-green/10 text-white hover:text-neon-green transition-colors"
                      >
                        {project.title}
                      </a>
                    </DropdownMenuItem>
                  ))}
                  <div className="border-t border-neon-green/20 mt-1">
                    <DropdownMenuItem className="px-0 py-0 focus:bg-transparent">
                      <Link 
                        to="/projetos"
                        className="block w-full px-4 py-2 text-sm font-semibold hover:bg-neon-green/10 text-neon-green transition-colors"
                      >
                        Ver todos os projetos
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-neon-green hover:text-white transition-colors focus:outline-none">
                Artigos
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center"
                className="bg-neon-dark border border-neon-green rounded-md shadow-lg py-1 w-[250px] max-h-[200px] overflow-y-auto"
                sideOffset={5}
              >
                <div className="custom-scrollbar">
                  {articles.map(article => (
                    <DropdownMenuItem key={article.id} className="px-0 py-0 focus:bg-transparent">
                      <Link 
                        to={`/artigos/${article.slug}`}
                        className="block w-full px-4 py-2 text-sm hover:bg-neon-green/10 text-white hover:text-neon-green transition-colors"
                      >
                        {article.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <div className="border-t border-neon-green/20 mt-1">
                    <DropdownMenuItem className="px-0 py-0 focus:bg-transparent">
                      <Link 
                        to="/artigos"
                        className="block w-full px-4 py-2 text-sm font-semibold hover:bg-neon-green/10 text-neon-green transition-colors"
                      >
                        Ver todos os artigos
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/curriculo" className="text-neon-green hover:text-white transition-colors">
              Currículo
            </Link>
            
            <Link to="/sobre" className="text-neon-green hover:text-white transition-colors">
              Sobre mim
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
