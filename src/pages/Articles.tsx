
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

// Mock data for articles
const articles = [
  { 
    id: 1, 
    title: "Introdução a Data Science", 
    slug: "intro-data-science",
    excerpt: "Uma introdução aos conceitos básicos de Data Science e como iniciar sua jornada nessa área fascinante.", 
    date: "2023-10-15",
    readTime: "8 min",
    tags: ["Data Science", "Iniciantes", "Carreira"]
  },
  { 
    id: 2, 
    title: "Python para Análise de Dados", 
    slug: "python-data-analysis",
    excerpt: "Como utilizar Python e suas bibliotecas (Pandas, NumPy, Matplotlib) para análise e visualização de dados.", 
    date: "2023-11-22",
    readTime: "12 min",
    tags: ["Python", "Pandas", "Data Analysis"]
  },
  { 
    id: 3, 
    title: "Machine Learning Explicado", 
    slug: "machine-learning-explained",
    excerpt: "Entenda os principais conceitos e algoritmos de Machine Learning de forma simples e didática.", 
    date: "2023-12-10",
    readTime: "15 min",
    tags: ["Machine Learning", "AI", "Algorithms"]
  },
  { 
    id: 4, 
    title: "Visualização de Dados com D3.js", 
    slug: "data-viz-d3js",
    excerpt: "Como criar visualizações de dados interativas e impactantes usando a biblioteca D3.js.", 
    date: "2024-01-05",
    readTime: "10 min",
    tags: ["D3.js", "Data Visualization", "JavaScript"]
  },
  { 
    id: 5, 
    title: "Estatística para Cientistas de Dados", 
    slug: "statistics-for-data-scientists",
    excerpt: "Os conceitos estatísticos essenciais que todo cientista de dados precisa dominar.", 
    date: "2024-02-18",
    readTime: "18 min",
    tags: ["Statistics", "Data Science", "Probability"]
  }
];

// Helper function to format date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

const Articles: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero 
          title="Artigos" 
          description="Compartilho aqui meus conhecimentos e experiências na área de dados. Esses artigos abordam desde conceitos básicos até técnicas avançadas."
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-12">
            {articles.map(article => (
              <div 
                key={article.id}
                className="bg-neon-dark border border-neon-green/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-neon-green/60 hover:shadow-[0_0_15px_rgba(170,255,0,0.2)] p-6"
              >
                <Link to={`/artigos/${article.slug}`} className="block">
                  <h3 className="text-2xl font-semibold text-neon-green mb-3 hover:underline">{article.title}</h3>
                </Link>
                
                <div className="flex items-center text-white/60 text-sm mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{article.readTime} de leitura</span>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4">{article.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 rounded bg-neon-green/10 text-neon-green"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/artigos/${article.slug}`}
                  className="inline-block text-neon-green hover:text-white transition-colors"
                >
                  Continuar lendo →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
