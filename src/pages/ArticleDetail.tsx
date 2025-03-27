import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <article className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-neon-green mb-4">Artigo: {slug}</h1>
          {/* Conteúdo do artigo */}
        </article>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
