
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

// Mock data for articles
const articles = [
  { 
    id: 1, 
    title: "Introdução a Data Science", 
    slug: "intro-data-science",
    content: `
      <p>A Data Science, ou Ciência de Dados, é um campo interdisciplinar que utiliza métodos científicos, processos, algoritmos e sistemas para extrair conhecimento e insights de dados estruturados e não estruturados.</p>
      
      <h2>Por que Data Science é importante?</h2>
      
      <p>Em um mundo cada vez mais digitalizado, a quantidade de dados gerados cresce exponencialmente. Empresas e organizações de todos os tamanhos e setores estão buscando profissionais que possam ajudá-las a transformar esses dados em informações valiosas para a tomada de decisões.</p>
      
      <h2>Habilidades necessárias</h2>
      
      <p>Para se tornar um cientista de dados competente, é necessário desenvolver habilidades em diversas áreas:</p>
      
      <ul>
        <li><strong>Programação:</strong> Python, R, SQL</li>
        <li><strong>Estatística e Matemática:</strong> Probabilidade, inferência estatística, álgebra linear</li>
        <li><strong>Manipulação e visualização de dados:</strong> Pandas, NumPy, Matplotlib, Seaborn</li>
        <li><strong>Machine Learning:</strong> Scikit-learn, TensorFlow, PyTorch</li>
        <li><strong>Comunicação:</strong> Capacidade de explicar conceitos técnicos para não especialistas</li>
      </ul>
      
      <h2>O processo de Data Science</h2>
      
      <p>O processo típico de um projeto de Data Science envolve as seguintes etapas:</p>
      
      <ol>
        <li><strong>Definição do problema:</strong> Entender claramente qual problema de negócio precisa ser resolvido</li>
        <li><strong>Coleta de dados:</strong> Obter os dados necessários de diversas fontes</li>
        <li><strong>Limpeza e preparação dos dados:</strong> Tratar valores ausentes, outliers e outras inconsistências</li>
        <li><strong>Exploração e visualização:</strong> Analisar os dados para identificar padrões e relações</li>
        <li><strong>Modelagem:</strong> Aplicar algoritmos de machine learning para criar modelos preditivos</li>
        <li><strong>Avaliação:</strong> Testar e validar os modelos</li>
        <li><strong>Implementação:</strong> Colocar o modelo em produção</li>
        <li><strong>Comunicação:</strong> Apresentar resultados e insights para stakeholders</li>
      </ol>
      
      <h2>Conclusão</h2>
      
      <p>A jornada para se tornar um cientista de dados requer dedicação e aprendizado contínuo, mas os benefícios são muitos: carreira promissora, trabalho desafiador e a oportunidade de causar impacto significativo através dos dados.</p>
      
      <p>Nos próximos artigos, abordaremos cada uma dessas áreas com mais profundidade e forneceremos recursos para ajudar em sua jornada de aprendizado.</p>
    `,
    date: "2023-10-15",
    readTime: "8 min",
    tags: ["Data Science", "Iniciantes", "Carreira"]
  },
  { 
    id: 2, 
    title: "Python para Análise de Dados", 
    slug: "python-data-analysis",
    content: `
      <p>O Python se tornou a linguagem de programação preferida para análise de dados devido à sua simplicidade, legibilidade e ao rico ecossistema de bibliotecas especializadas.</p>
      
      <h2>Bibliotecas essenciais</h2>
      
      <p>Algumas das bibliotecas mais importantes para análise de dados em Python incluem:</p>
      
      <ul>
        <li><strong>Pandas:</strong> Manipulação e análise de dados estruturados</li>
        <li><strong>NumPy:</strong> Computação numérica eficiente</li>
        <li><strong>Matplotlib:</strong> Visualizações estáticas</li>
        <li><strong>Seaborn:</strong> Visualizações estatísticas de alto nível</li>
        <li><strong>Plotly:</strong> Visualizações interativas</li>
      </ul>
      
      <h2>Exemplo básico com Pandas</h2>
      
      <p>Aqui está um exemplo simples de como carregar e explorar um conjunto de dados usando Pandas:</p>
      
      <pre>
import pandas as pd

# Carregar dados
df = pd.read_csv('dados.csv')

# Visualizar as primeiras linhas
print(df.head())

# Informações sobre o DataFrame
print(df.info())

# Estatísticas descritivas
print(df.describe())

# Verificar valores ausentes
print(df.isnull().sum())
      </pre>
      
      <h2>Manipulação de dados com Pandas</h2>
      
      <p>Pandas oferece muitas funcionalidades para manipular dados:</p>
      
      <pre>
# Filtrar dados
clientes_ativos = df[df['status'] == 'ativo']

# Agrupar e agregar dados
vendas_por_categoria = df.groupby('categoria')['valor'].sum().reset_index()

# Ordenar dados
top_produtos = df.sort_values('vendas', ascending=False).head(10)

# Criar novas colunas
df['desconto'] = df['preco_original'] - df['preco_final']

# Juntar (merge) DataFrames
resultado = pd.merge(df_clientes, df_vendas, on='cliente_id')
      </pre>
      
      <h2>Visualização com Matplotlib e Seaborn</h2>
      
      <p>Visualizar dados é crucial para entender padrões e comunicar resultados:</p>
      
      <pre>
import matplotlib.pyplot as plt
import seaborn as sns

# Configurar estilo
sns.set(style="whitegrid")

# Gráfico de barras
plt.figure(figsize=(10, 6))
sns.barplot(x='categoria', y='valor', data=vendas_por_categoria)
plt.title('Vendas por Categoria')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# Gráfico de dispersão
plt.figure(figsize=(10, 6))
sns.scatterplot(x='idade', y='valor_gasto', hue='genero', data=df)
plt.title('Relação entre Idade e Valor Gasto')
plt.show()
      </pre>
      
      <h2>Conclusão</h2>
      
      <p>O Python, combinado com suas poderosas bibliotecas, oferece um ambiente completo e flexível para análise de dados. Dominar essas ferramentas é um passo fundamental para qualquer pessoa interessada em se tornar um cientista de dados ou analista de dados competente.</p>
    `,
    date: "2023-11-22",
    readTime: "12 min",
    tags: ["Python", "Pandas", "Data Analysis"]
  },
  { 
    id: 3, 
    title: "Machine Learning Explicado", 
    slug: "machine-learning-explained",
    content: `
      <p>Machine Learning (Aprendizado de Máquina) é uma subárea da Inteligência Artificial que capacita sistemas a aprender a partir de dados, identificar padrões e tomar decisões com mínima intervenção humana.</p>
      
      <h2>Tipos de Machine Learning</h2>
      
      <p>Existem três principais categorias de algoritmos de Machine Learning:</p>
      
      <h3>1. Aprendizado Supervisionado</h3>
      
      <p>O algoritmo é treinado em um conjunto de dados rotulado, onde as entradas e saídas desejadas já são conhecidas. Exemplos incluem:</p>
      
      <ul>
        <li><strong>Regressão:</strong> Prever valores contínuos (ex: preço de imóveis)</li>
        <li><strong>Classificação:</strong> Atribuir categorias (ex: spam ou não spam)</li>
      </ul>
      
      <h3>2. Aprendizado Não Supervisionado</h3>
      
      <p>Trabalha com dados não rotulados, buscando identificar estruturas ou padrões naturais. Exemplos incluem:</p>
      
      <ul>
        <li><strong>Clustering:</strong> Agrupar dados similares</li>
        <li><strong>Redução de dimensionalidade:</strong> Simplificar dados preservando características importantes</li>
      </ul>
      
      <h3>3. Aprendizado por Reforço</h3>
      
      <p>O algoritmo aprende por tentativa e erro, recebendo recompensas ou penalidades pelas ações tomadas em um ambiente. É usado em jogos, robótica e sistemas autônomos.</p>
      
      <h2>Algoritmos populares</h2>
      
      <p>Alguns dos algoritmos mais utilizados em Machine Learning:</p>
      
      <ul>
        <li><strong>Regressão Linear:</strong> Modelar relações lineares entre variáveis</li>
        <li><strong>Árvores de Decisão:</strong> Estruturas de árvore para classificação e regressão</li>
        <li><strong>Random Forest:</strong> Conjunto de árvores de decisão</li>
        <li><strong>K-Means:</strong> Algoritmo de clustering</li>
        <li><strong>Naive Bayes:</strong> Classificador probabilístico baseado no teorema de Bayes</li>
        <li><strong>SVM (Support Vector Machines):</strong> Classificador de margem máxima</li>
        <li><strong>Redes Neurais:</strong> Inspiradas no cérebro humano, base do Deep Learning</li>
      </ul>
      
      <h2>O processo de Machine Learning</h2>
      
      <p>Um projeto típico de Machine Learning segue estes passos:</p>
      
      <ol>
        <li><strong>Definição do problema:</strong> O que queremos prever ou classificar?</li>
        <li><strong>Coleta de dados:</strong> Obter dados relevantes para o problema</li>
        <li><strong>Pré-processamento:</strong> Limpeza, normalização e transformação dos dados</li>
        <li><strong>Divisão dos dados:</strong> Separar em conjuntos de treino, validação e teste</li>
        <li><strong>Seleção do modelo:</strong> Escolher algoritmos apropriados</li>
        <li><strong>Treinamento:</strong> Ajustar o modelo aos dados de treinamento</li>
        <li><strong>Avaliação:</strong> Testar o desempenho em dados não vistos</li>
        <li><strong>Ajuste de hiperparâmetros:</strong> Otimizar o modelo</li>
        <li><strong>Implementação:</strong> Colocar o modelo em produção</li>
        <li><strong>Monitoramento:</strong> Acompanhar o desempenho ao longo do tempo</li>
      </ol>
      
      <h2>Desafios comuns</h2>
      
      <p>O desenvolvimento de modelos de Machine Learning enfrenta vários desafios:</p>
      
      <ul>
        <li><strong>Overfitting:</strong> Quando o modelo se ajusta demais aos dados de treinamento e generaliza mal</li>
        <li><strong>Underfitting:</strong> Quando o modelo é muito simples para capturar a complexidade dos dados</li>
        <li><strong>Dados desbalanceados:</strong> Quando algumas classes têm muito mais exemplos que outras</li>
        <li><strong>Dados faltantes:</strong> Como lidar com valores ausentes</li>
        <li><strong>Interpretabilidade:</strong> Entender como o modelo toma decisões</li>
        <li><strong>Viés e equidade:</strong> Garantir que o modelo não discrimine grupos específicos</li>
      </ul>
      
      <h2>Conclusão</h2>
      
      <p>Machine Learning está transformando diversos setores, desde saúde e finanças até entretenimento e transporte. Compreender seus fundamentos é essencial para qualquer profissional de dados, pois permite extrair insights valiosos e construir sistemas inteligentes que resolvem problemas complexos.</p>
    `,
    date: "2023-12-10",
    readTime: "15 min",
    tags: ["Machine Learning", "AI", "Algorithms"]
  },
  { 
    id: 4, 
    title: "Visualização de Dados com D3.js", 
    slug: "data-viz-d3js",
    content: `
      <p>D3.js (Data-Driven Documents) é uma poderosa biblioteca JavaScript para criar visualizações de dados interativas e dinâmicas na web.</p>
      
      <h2>Por que D3.js?</h2>
      
      <p>D3.js oferece uma flexibilidade excepcional para criar visualizações personalizadas:</p>
      
      <ul>
        <li>Controle total sobre o resultado visual</li>
        <li>Suporte a animações e transições suaves</li>
        <li>Manipulação direta do DOM baseada em dados</li>
        <li>Ampla variedade de visualizações possíveis</li>
        <li>Compatibilidade com padrões web modernos (HTML5, CSS3, SVG)</li>
      </ul>
      
      <h2>Conceitos fundamentais</h2>
      
      <p>Para trabalhar com D3.js, é importante entender alguns conceitos-chave:</p>
      
      <h3>Seleções</h3>
      
      <p>D3 usa um paradigma de programação baseado em seleções para modificar elementos do DOM:</p>
      
      <pre>
// Selecionar um elemento
const svg = d3.select("svg");

// Selecionar múltiplos elementos
const circles = d3.selectAll("circle");
      </pre>
      
      <h3>Data Binding</h3>
      
      <p>O poder do D3 vem da capacidade de vincular dados a elementos:</p>
      
      <pre>
const data = [10, 20, 30, 40, 50];

// Vincular dados a elementos
const circles = svg.selectAll("circle")
  .data(data)
  .enter()  // Para novos elementos
  .append("circle");
      </pre>
      
      <h3>Escalas</h3>
      
      <p>Escalas mapeiam valores de dados para propriedades visuais:</p>
      
      <pre>
// Escala linear para mapear dados para coordenadas em pixels
const xScale = d3.scaleLinear()
  .domain([0, d3.max(data)])  // Faixa dos dados
  .range([0, width]);  // Faixa visual (em pixels)
      </pre>
      
      <h2>Exemplo: Gráfico de barras simples</h2>
      
      <p>Aqui está um exemplo completo de como criar um gráfico de barras com D3.js:</p>
      
      <pre>
// Dados
const data = [120, 220, 150, 320, 180];

// Dimensões
const width = 500;
const height = 300;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

// Criar o elemento SVG
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", \`translate(\${margin.left},\${margin.top})\`);

// Escalas
const xScale = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([0, width])
  .padding(0.1);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([height, 0]);

// Eixos
svg.append("g")
  .attr("transform", \`translate(0,\${height})\`)
  .call(d3.axisBottom(xScale));

svg.append("g")
  .call(d3.axisLeft(yScale));

// Barras
svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => xScale(i))
  .attr("y", d => yScale(d))
  .attr("width", xScale.bandwidth())
  .attr("height", d => height - yScale(d))
  .attr("fill", "steelblue");
      </pre>
      
      <h2>Visualizações avançadas</h2>
      
      <p>Além de gráficos básicos, D3.js permite criar visualizações complexas como:</p>
      
      <ul>
        <li>Gráficos de rede (grafos)</li>
        <li>Mapas de calor</li>
        <li>Treemaps</li>
        <li>Mapas geográficos</li>
        <li>Visualizações de hierarquia</li>
      </ul>
      
      <h2>Conclusão</h2>
      
      <p>D3.js oferece possibilidades quase ilimitadas para visualização de dados na web. Embora tenha uma curva de aprendizado mais íngreme que outras bibliotecas, o nível de personalização e interatividade que permite é inigualável.</p>
      
      <p>Se você estiver interessado em criar visualizações únicas e impactantes, vale a pena investir tempo para dominar esta poderosa biblioteca.</p>
    `,
    date: "2024-01-05",
    readTime: "10 min",
    tags: ["D3.js", "Data Visualization", "JavaScript"]
  },
  { 
    id: 5, 
    title: "Estatística para Cientistas de Dados", 
    slug: "statistics-for-data-scientists",
    content: `
      <p>A estatística é o fundamento da ciência de dados. Sem uma compreensão sólida dos conceitos estatísticos, é impossível extrair insights significativos dos dados ou construir modelos confiáveis.</p>
      
      <h2>Estatística descritiva</h2>
      
      <p>A estatística descritiva resume e organiza características de um conjunto de dados:</p>
      
      <h3>Medidas de tendência central</h3>
      
      <ul>
        <li><strong>Média:</strong> Soma dos valores dividida pelo número de observações</li>
        <li><strong>Mediana:</strong> Valor central quando os dados estão ordenados</li>
        <li><strong>Moda:</strong> Valor que aparece com mais frequência</li>
      </ul>
      
      <h3>Medidas de dispersão</h3>
      
      <ul>
        <li><strong>Amplitude:</strong> Diferença entre o maior e o menor valor</li>
        <li><strong>Variância:</strong> Média dos quadrados dos desvios em relação à média</li>
        <li><strong>Desvio padrão:</strong> Raiz quadrada da variância</li>
        <li><strong>Intervalo interquartil (IQR):</strong> Diferença entre o terceiro e o primeiro quartil</li>
      </ul>
      
      <h2>Probabilidade</h2>
      
      <p>A teoria da probabilidade é essencial para modelar incertezas e fazer previsões:</p>
      
      <h3>Conceitos fundamentais</h3>
      
      <ul>
        <li><strong>Espaço amostral:</strong> Conjunto de todos os resultados possíveis</li>
        <li><strong>Evento:</strong> Subconjunto do espaço amostral</li>
        <li><strong>Probabilidade condicional:</strong> Probabilidade de um evento ocorrer dado que outro evento ocorreu</li>
        <li><strong>Independência:</strong> Quando a ocorrência de um evento não afeta a probabilidade de outro</li>
        <li><strong>Teorema de Bayes:</strong> Relaciona probabilidades condicionais</li>
      </ul>
      
      <h3>Distribuições de probabilidade</h3>
      
      <p>Modelos matemáticos que descrevem a probabilidade de diferentes resultados:</p>
      
      <ul>
        <li><strong>Normal (Gaussiana):</strong> A famosa "curva em forma de sino"</li>
        <li><strong>Binomial:</strong> Modela número de sucessos em n tentativas independentes</li>
        <li><strong>Poisson:</strong> Modela número de eventos em um intervalo fixo</li>
        <li><strong>Exponencial:</strong> Modela tempo entre eventos</li>
        <li><strong>Uniforme:</strong> Todos os resultados têm a mesma probabilidade</li>
      </ul>
      
      <h2>Inferência estatística</h2>
      
      <p>A inferência estatística permite tirar conclusões sobre uma população a partir de uma amostra:</p>
      
      <h3>Estimação</h3>
      
      <ul>
        <li><strong>Estimadores pontuais:</strong> Valor único que estima um parâmetro populacional</li>
        <li><strong>Intervalos de confiança:</strong> Faixa de valores prováveis para um parâmetro</li>
      </ul>
      
      <h3>Testes de hipóteses</h3>
      
      <p>Processo para determinar se uma hipótese sobre uma população é plausível:</p>
      
      <ul>
        <li><strong>Hipótese nula (H0):</strong> Afirmação assumida como verdadeira inicialmente</li>
        <li><strong>Hipótese alternativa (H1):</strong> Afirmação que contraria a hipótese nula</li>
        <li><strong>Valor-p:</strong> Probabilidade de observar resultados tão ou mais extremos que os atuais, assumindo que H0 é verdadeira</li>
        <li><strong>Erro Tipo I:</strong> Rejeitar H0 quando ela é verdadeira (falso positivo)</li>
        <li><strong>Erro Tipo II:</strong> Não rejeitar H0 quando ela é falsa (falso negativo)</li>
      </ul>
      
      <h2>Correlação e regressão</h2>
      
      <p>Técnicas para entender relações entre variáveis:</p>
      
      <h3>Correlação</h3>
      
      <ul>
        <li><strong>Coeficiente de correlação de Pearson:</strong> Mede a força e direção da relação linear entre duas variáveis</li>
        <li><strong>Correlação de Spearman:</strong> Mede relações monotônicas não necessariamente lineares</li>
      </ul>
      
      <h3>Regressão</h3>
      
      <ul>
        <li><strong>Regressão linear simples:</strong> Modelar relação entre uma variável dependente e uma independente</li>
        <li><strong>Regressão linear múltipla:</strong> Múltiplas variáveis independentes</li>
        <li><strong>Coeficientes de regressão:</strong> Indicam como as variáveis independentes afetam a dependente</li>
        <li><strong>R²:</strong> Medida de ajuste do modelo aos dados</li>
      </ul>
      
      <h2>Aplicações na ciência de dados</h2>
      
      <p>A estatística é aplicada em diversas etapas do processo de ciência de dados:</p>
      
      <ul>
        <li><strong>Análise exploratória:</strong> Entender distribuições, identificar outliers, visualizar relações</li>
        <li><strong>Feature engineering:</strong> Transformar e selecionar variáveis com base em princípios estatísticos</li>
        <li><strong>Modelagem:</strong> Muitos algoritmos de ML têm fundamentos estatísticos</li>
        <li><strong>Avaliação de modelos:</strong> Métricas estatísticas para medir performance</li>
        <li><strong>A/B testing:</strong> Comparar estatisticamente diferentes versões</li>
      </ul>
      
      <h2>Conclusão</h2>
      
      <p>Um entendimento sólido de estatística permite que cientistas de dados façam análises mais robustas, construam modelos mais confiáveis e comuniquem resultados com mais confiança.</p>
      
      <p>A estatística não é apenas uma ferramenta técnica, mas um modo de pensar que ajuda a enfrentar a incerteza e extrair significado de dados complexos.</p>
    `,
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

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-neon-green mb-4">Artigo não encontrado</h1>
            <p className="text-white/80 mb-6">O artigo que você está procurando não existe.</p>
            <Link to="/artigos" className="text-neon-green hover:text-white transition-colors">
              Voltar para artigos
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <Link to="/artigos" className="inline-flex items-center text-neon-green hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para artigos
          </Link>
          
          <article className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-neon-green mb-4">{article.title}</h1>
            
            <div className="flex items-center text-white/60 text-sm mb-6">
              <div className="flex items-center mr-4">
                <Calendar size={14} className="mr-1" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 rounded bg-neon-green/10 text-neon-green"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div 
              className="prose prose-invert prose-headings:text-neon-green prose-a:text-neon-green prose-strong:text-neon-green max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
