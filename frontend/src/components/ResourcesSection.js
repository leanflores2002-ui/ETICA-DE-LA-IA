import React from 'react';
import { BookOpen, Users, FileText, Globe, Video, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const ResourcesSection = () => {
  const resources = {
    papers: [
      {
        title: 'Attention Is All You Need',
        authors: 'Vaswani et al.',
        year: '2017',
        description: 'Artículo fundamental que introduce la arquitectura Transformer, base de modelos como GPT y BERT.',
        link: '#'
      },
      {
        title: 'Ethics of Artificial Intelligence and Robotics',
        authors: 'Stanford Encyclopedia of Philosophy',
        year: '2020',
        description: 'Revisión exhaustiva de consideraciones éticas en IA y robótica desde perspectiva filosófica.',
        link: '#'
      },
      {
        title: 'Fairness and Machine Learning',
        authors: 'Barocas, Hardt, Narayanan',
        year: '2019',
        description: 'Texto completo sobre limitaciones de predicciones automáticas, equidad y responsabilidad.',
        link: '#'
      },
      {
        title: 'The Social Dilemma: Social Media and Your Mental Health',
        authors: 'Journal of Medical Internet Research',
        year: '2021',
        description: 'Análisis del impacto de algoritmos de redes sociales en salud mental y comportamiento.',
        link: '#'
      }
    ],
    organizations: [
      {
        name: 'Partnership on AI',
        description: 'Coalición de organizaciones trabajando en mejores prácticas para tecnologías de IA.',
        focus: 'Colaboración multi-stakeholder',
        link: '#'
      },
      {
        name: 'AI Now Institute',
        description: 'Instituto de investigación examinando implicaciones sociales de inteligencia artificial.',
        focus: 'Investigación y política pública',
        link: '#'
      },
      {
        name: 'Future of Humanity Institute',
        description: 'Centro de investigación en Universidad de Oxford enfocado en riesgos existenciales.',
        focus: 'Seguridad de IA a largo plazo',
        link: '#'
      },
      {
        name: 'IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems',
        description: 'Desarrollando estándares técnicos para consideraciones éticas en diseño de sistemas autónomos.',
        focus: 'Estándares técnicos',
        link: '#'
      },
      {
        name: 'Montreal AI Ethics Institute',
        description: 'Instituto internacional democratizando educación en ética de IA.',
        focus: 'Educación y divulgación',
        link: '#'
      },
      {
        name: 'Algorithm Watch',
        description: 'Organización sin fines de lucro evaluando procesos de toma de decisiones algorítmicas.',
        focus: 'Vigilancia y transparencia',
        link: '#'
      }
    ],
    frameworks: [
      {
        name: 'Reglamento General de Protección de Datos (GDPR)',
        region: 'Unión Europea',
        year: '2018',
        description: 'Marco regulatorio estableciendo estándares de protección de datos personales y privacidad.',
        keyPoints: ['Derecho al olvido', 'Consentimiento explícito', 'Portabilidad de datos']
      },
      {
        name: 'AI Act (Ley de IA)',
        region: 'Unión Europea',
        year: '2024',
        description: 'Primera legislación integral regulando inteligencia artificial basada en niveles de riesgo.',
        keyPoints: ['Clasificación por riesgo', 'Prohibición de prácticas', 'Requisitos de transparencia']
      },
      {
        name: 'OECD AI Principles',
        region: 'Internacional',
        year: '2019',
        description: 'Principios para desarrollo responsable de IA confiable adoptados por países miembros.',
        keyPoints: ['Crecimiento inclusivo', 'Valores centrados en humanos', 'Transparencia']
      },
      {
        name: 'Beijing AI Principles',
        region: 'China',
        year: '2019',
        description: 'Marco de principios éticos para desarrollo y gobernanza de IA en China.',
        keyPoints: ['Bien común', 'Control humano', 'Responsabilidad']
      }
    ],
    tools: [
      {
        name: 'AI Fairness 360',
        developer: 'IBM',
        description: 'Kit de herramientas open-source para detectar y mitigar sesgo en modelos de machine learning.',
        type: 'Python Library'
      },
      {
        name: 'What-If Tool',
        developer: 'Google',
        description: 'Herramienta interactiva para analizar modelos de ML sin necesidad de código.',
        type: 'Visualización'
      },
      {
        name: 'Fairlearn',
        developer: 'Microsoft',
        description: 'Paquete Python para evaluar y mejorar equidad de sistemas de machine learning.',
        type: 'Python Library'
      },
      {
        name: 'LIME (Local Interpretable Model-agnostic Explanations)',
        developer: 'Community',
        description: 'Técnica para explicar predicciones de cualquier clasificador de machine learning.',
        type: 'Explicabilidad'
      },
      {
        name: 'SHAP (SHapley Additive exPlanations)',
        developer: 'Community',
        description: 'Enfoque unificado para explicar salida de modelos de machine learning.',
        type: 'Explicabilidad'
      }
    ],
    courses: [
      {
        title: 'Ethics of AI',
        provider: 'Harvard University',
        level: 'Universitario',
        description: 'Curso explorando dimensiones éticas, sociales y políticas de inteligencia artificial.',
        link: '#'
      },
      {
        title: 'AI For Everyone',
        provider: 'DeepLearning.AI (Coursera)',
        level: 'Introductorio',
        description: 'Curso no técnico sobre qué es IA, qué puede y no puede hacer, y sus implicaciones.',
        link: '#'
      },
      {
        title: 'Practical Data Ethics',
        provider: 'fast.ai',
        level: 'Intermedio',
        description: 'Curso práctico abordando temas como sesgo, privacidad y desinformación en datos y ML.',
        link: '#'
      },
      {
        title: 'Machine Learning Fairness',
        provider: 'Google',
        level: 'Técnico',
        description: 'Curso técnico sobre identificación y mitigación de sesgos en sistemas de ML.',
        link: '#'
      }
    ]
  };

  // Mapeo de enlaces externos para reemplazar placeholders
  const paperLinks = {
    'Attention Is All You Need': 'https://arxiv.org/abs/1706.03762',
    'Ethics of Artificial Intelligence and Robotics': 'https://plato.stanford.edu/entries/ethics-ai/',
    'Fairness and Machine Learning': 'https://fairmlbook.org/',
    'The Social Dilemma: Social Media and Your Mental Health': 'https://www.jmir.org/'
  };
  const orgLinks = {
    'Partnership on AI': 'https://www.partnershiponai.org/',
    'AI Now Institute': 'https://ainowinstitute.org/',
    'Future of Humanity Institute': 'https://www.fhi.ox.ac.uk/',
    'IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems': 'https://ethicsinaction.ieee.org/',
    'Montreal AI Ethics Institute': 'https://montrealethics.ai/',
    'Algorithm Watch': 'https://algorithmwatch.org/en/'
  };
  const courseLinks = {
    'Ethics of AI': 'https://online.hbs.edu/courses/ethics-of-ai/',
    'AI For Everyone': 'https://www.coursera.org/learn/ai-for-everyone',
    'Practical Data Ethics': 'https://ethics.fast.ai/',
    'Machine Learning Fairness': 'https://developers.google.com/machine-learning/fairness-overview'
  };
  const getPaperUrl = (title) => paperLinks[title] || '#';
  const getOrgUrl = (name) => orgLinks[name] || '#';
  const getCourseUrl = (title) => courseLinks[title] || '#';

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 data-reveal className="reveal reveal-up text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Recursos
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Herramientas, organizaciones y materiales para profundizar en la ética de la inteligencia artificial
          </p>
        </div>

        <div data-reveal className="reveal reveal-up mb-10">
          <video
            controls
            className="w-full rounded-lg shadow-lg"
            poster="https://images.unsplash.com/photo-1717501220725-83f151c447e7?w=1200&q=60"
          >
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>

        <Tabs defaultValue="papers" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="papers" className="flex items-center space-x-2">
              <FileText size={16} />
              <span className="hidden sm:inline">Artículos</span>
            </TabsTrigger>
            <TabsTrigger value="organizations" className="flex items-center space-x-2">
              <Users size={16} />
              <span className="hidden sm:inline">Organizaciones</span>
            </TabsTrigger>
            <TabsTrigger value="frameworks" className="flex items-center space-x-2">
              <Award size={16} />
              <span className="hidden sm:inline">Marcos</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center space-x-2">
              <Globe size={16} />
              <span className="hidden sm:inline">Herramientas</span>
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center space-x-2">
              <Video size={16} />
              <span className="hidden sm:inline">Cursos</span>
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center space-x-2">
              <BookOpen size={16} />
              <span className="hidden sm:inline">Libros</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="papers" className="space-y-4" data-stagger>
            {resources.papers.map((paper, index) => (
              <Card
                key={index}
                data-reveal
                className="reveal reveal-up border-slate-200 cursor-pointer"
                onClick={() => window.open(getPaperUrl(paper.title), '_blank', 'noopener,noreferrer')}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') window.open(getPaperUrl(paper.title), '_blank', 'noopener,noreferrer'); }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-slate-900">
                    {paper.title}
                  </CardTitle>
                  <CardDescription>
                    {paper.authors} ({paper.year})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-3">{paper.description}</p>
                  <a
                    href={getPaperUrl(paper.title)} target="_blank" rel="noopener noreferrer"
                    className="text-slate-900 hover:text-slate-700 font-medium transition-colors"
                  >
                    Leer artículo →
                  </a>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="organizations" className="grid md:grid-cols-2 gap-4" data-stagger>
            {resources.organizations.map((org, index) => (
              <Card
                key={index}
                data-reveal
                className="reveal reveal-up border-slate-200 cursor-pointer"
                onClick={() => window.open(getOrgUrl(org.name), '_blank', 'noopener,noreferrer')}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') window.open(getOrgUrl(org.name), '_blank', 'noopener,noreferrer'); }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-slate-900">
                    {org.name}
                  </CardTitle>
                  <CardDescription>{org.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-3">{org.description}</p>
                  <a
                    href={getOrgUrl(org.name)} target="_blank" rel="noopener noreferrer"
                    className="text-slate-900 hover:text-slate-700 font-medium transition-colors"
                  >
                    Visitar sitio web →
                  </a>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="frameworks" className="space-y-4">
            {resources.frameworks.map((framework, index) => (
              <Card key={index} className="border-slate-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-serif text-slate-900">
                        {framework.name}
                      </CardTitle>
                      <CardDescription>
                        {framework.region} • {framework.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700">{framework.description}</p>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Puntos Clave:</h4>
                    <ul className="space-y-1">
                      {framework.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-slate-700 mr-2">•</span>
                          <span className="text-slate-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="tools" className="grid md:grid-cols-2 gap-4" data-stagger>
            {resources.tools.map((tool, index) => (
              <Card key={index} data-reveal className="reveal reveal-up border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-slate-900">
                    {tool.name}
                  </CardTitle>
                  <CardDescription>
                    {tool.developer} • {tool.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="courses" className="grid md:grid-cols-2 gap-4" data-stagger>
            {resources.courses.map((course, index) => (
              <Card
                key={index}
                data-reveal
                className="reveal reveal-up border-slate-200 cursor-pointer"
                onClick={() => window.open(getCourseUrl(course.title), '_blank', 'noopener,noreferrer')}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') window.open(getCourseUrl(course.title), '_blank', 'noopener,noreferrer'); }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-slate-900">
                    {course.title}
                  </CardTitle>
                  <CardDescription>
                    {course.provider} • {course.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-3">{course.description}</p>
                  <a
                    href={getCourseUrl(course.title)} target="_blank" rel="noopener noreferrer"
                    className="text-slate-900 hover:text-slate-700 font-medium transition-colors"
                  >
                    Ver curso →
                  </a>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="books">
            <Card className="border-slate-200" data-reveal>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-slate-900">Libros Recomendados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Weapons of Math Destruction</h4>
                  <p className="text-slate-600 text-sm mb-2">Cathy O'Neil (2016)</p>
                  <p className="text-slate-700">Examina cómo algoritmos pueden perpetuar desigualdad y amenazar democracia.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Artificial Intelligence: A Guide for Thinking Humans</h4>
                  <p className="text-slate-600 text-sm mb-2">Melanie Mitchell (2019)</p>
                  <p className="text-slate-700">Introducción accesible a IA, sus capacidades, limitaciones y futuro.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">The Alignment Problem</h4>
                  <p className="text-slate-600 text-sm mb-2">Brian Christian (2020)</p>
                  <p className="text-slate-700">Explora desafío de alinear valores de IA con valores humanos.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Atlas of AI</h4>
                  <p className="text-slate-600 text-sm mb-2">Kate Crawford (2021)</p>
                  <p className="text-slate-700">Análisis de costos políticos, sociales y ambientales de inteligencia artificial.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Human Compatible: AI and the Problem of Control</h4>
                  <p className="text-slate-600 text-sm mb-2">Stuart Russell (2019)</p>
                  <p className="text-slate-700">Propone nuevo enfoque para crear IA que sea beneficiosa para humanidad.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;
