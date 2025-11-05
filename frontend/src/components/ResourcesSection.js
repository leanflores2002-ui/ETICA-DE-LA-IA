import React, { useEffect, useState } from 'react';
import { BookOpen, Users, FileText, Globe, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Link } from 'react-router-dom';
import { initAnimations } from '@/lib/animations/animations';

const ResourcesSection = () => {
  const resources = {
    // Recursos de información: PDFs/estudios en español o con versión en español
    papers: [
      {
        title: 'Recomendación sobre la Ética de la IA',
        authors: 'UNESCO',
        year: '2021',
        description: 'Marco global de principios para el desarrollo y uso ético de la IA aprobado por 193 Estados Miembros.',
        link: 'https://unesdoc.unesco.org/ark:/48223/pf0000381137_spa'
      },
      {
        title: 'Reglamento (UE) sobre IA (AI Act)',
        authors: 'Parlamento y Consejo de la UE',
        year: '2024',
        description: 'Texto legal del Reglamento de IA de la Unión Europea en español (EUR-Lex).',
        link: 'https://eur-lex.europa.eu/legal-content/ES/TXT/PDF/?uri=CELEX:32024R1689'
      },
      {
        title: 'RGPD — Reglamento General de Protección de Datos',
        authors: 'Unión Europea',
        year: '2016',
        description: 'Reglamento europeo clave para el tratamiento de datos personales aplicado a sistemas de IA.',
        link: 'https://eur-lex.europa.eu/legal-content/ES/TXT/PDF/?uri=CELEX:32016R0679'
      },
      {
        title: 'Guía de Evaluación de Impacto (EIPD) RGPD',
        authors: 'AEPD (España)',
        year: '2019',
        description: 'Guía práctica de la Agencia Española de Protección de Datos para realizar evaluaciones de impacto.',
        link: 'https://www.aepd.es/sites/default/files/2019-09/guia-evaluacion-de-impacto-rgpd.pdf'
      },
      {
        title: 'Guía de Anonimización de Datos Personales',
        authors: 'AEPD (España)',
        year: '2019',
        description: 'Buenas prácticas para anonimizar conjuntos de datos utilizados por sistemas de IA.',
        link: 'https://www.aepd.es/sites/default/files/2019-10/guia-anonimizacion-datos-personales.pdf'
      },
      {
        title: 'Carta de Derechos Digitales (España)',
        authors: 'Gobierno de España',
        year: '2021',
        description: 'Referente español sobre derechos y principios en el entorno digital, relevante para IA.',
        link: 'https://www.lamoncloa.gob.es/presidente/actividades/Documents/2021/140721-Carta_Derechos_Digitales_RedEs.pdf'
      },
      {
        title: 'Principios de la OCDE sobre IA',
        authors: 'OCDE',
        year: '2019',
        description: 'Principios internacionales para una IA responsable. Página oficial con versiones en varios idiomas.',
        link: 'https://oecd.ai/es/ai-principles'
      },
      {
        title: 'Libro Blanco sobre la IA — Enfoque europeo',
        authors: 'Comisión Europea',
        year: '2020',
        description: 'Propuestas para promover una IA confiable y centrada en el ser humano en Europa.',
        link: 'https://ec.europa.eu/info/sites/default/files/commission-white-paper-artificial-intelligence-feb2020_es.pdf'
      }
    ],
    organizations: [
      {
        name: 'AESIA — Agencia Española de Supervisión de la IA',
        description: 'Entidad pública dedicada a la supervisión y promoción de una IA confiable en España.',
        focus: 'Supervisión y gobernanza',
        link: 'https://www.aesia.gob.es/'
      },
      {
        name: 'UNESCO — Ética de la IA',
        description: 'Iniciativa global para promover marcos éticos y capacidades en IA.',
        focus: 'Ética y educación',
        link: 'https://www.unesco.org/es/artificial-intelligence/ethics'
      },
      {
        name: 'ODISEIA',
        description: 'Observatorio del Impacto Social y Ético de la IA (España).',
        focus: 'Impacto social y principios',
        link: 'https://odiseia.org/'
      },
      {
        name: 'Fundación Éticas',
        description: 'Organización que impulsa auditorías algorítmicas y evaluaciones de impacto.',
        focus: 'Transparencia y auditoría',
        link: 'https://eticasfoundation.org/es/'
      },
      {
        name: 'OECD.AI',
        description: 'Observatorio de políticas de IA de la OCDE con métricas, políticas y principios.',
        focus: 'Política pública y datos',
        link: 'https://oecd.ai/es/'
      },
      {
        name: 'Partnership on AI',
        description: 'Alianza multi-actor para desarrollar mejores prácticas en IA responsable.',
        focus: 'Buenas prácticas y colaboración',
        link: 'https://www.partnershiponai.org/'
      }
    ]
  };

  // En esta versión los enlaces ya vienen en cada item
  const getPaperUrl = (paper) => paper?.link || '#';
  const getOrgUrl = (org) => org?.link || '#';
  
  useEffect(() => {
    try {
      initAnimations({ once: false, stagger: 48 });
    } catch {}
  }, []);

  const [activeTab, setActiveTab] = useState('papers');

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

        <div className="grid sm:grid-cols-2 gap-4 mb-10" data-stagger>
          <Link to="/herramientas" className="block" data-reveal>
            <Card className="reveal reveal-up border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-serif text-slate-900">Herramientas</CardTitle>
                    <CardDescription className="text-slate-600">Utilidades y kits para IA responsable</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
          <Link to="/cursos" className="block" data-reveal>
            <Card className="reveal reveal-up border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                    <Video className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-serif text-slate-900">Cursos</CardTitle>
                    <CardDescription className="text-slate-600">Formación y materiales recomendados</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div data-reveal className="reveal reveal-up mb-10">
          <video
            controls
            className="w-full rounded-lg shadow-lg min-h-[240px] md:min-h-[360px]"
            poster="https://images.unsplash.com/photo-1717501220725-83f151c447e7?w=1200&q=60"
          >
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>

        <Tabs
          value={activeTab}
          className="w-full"
          onValueChange={(v) => {
            setActiveTab(v);
            try {
              requestAnimationFrame(() => initAnimations({ once: false, stagger: 48 }));
            } catch {}
          }}
        >
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-3 mb-8">
            <TabsTrigger value="organizations" className="flex items-center space-x-2">
              <Users size={16} />
              <span className="hidden sm:inline">Organizaciones</span>
            </TabsTrigger>
            <TabsTrigger value="papers" className="flex items-center space-x-2">
              <FileText size={16} />
              <span className="hidden sm:inline">Recursos de información</span>
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center space-x-2">
              <BookOpen size={16} />
              <span className="hidden sm:inline">Libros</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="papers" className="space-y-4" data-stagger>
            {activeTab === 'papers' && resources.papers.map((paper, index) => (
              <Card
                key={index}
                data-reveal
                className="reveal reveal-up border-slate-200 cursor-pointer"
                onClick={() => window.open(getPaperUrl(paper), '_blank', 'noopener,noreferrer')}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') window.open(getPaperUrl(paper), '_blank', 'noopener,noreferrer'); }}
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
                    href={getPaperUrl(paper)} target="_blank" rel="noopener noreferrer"
                    className="text-slate-900 hover:text-slate-700 font-medium transition-colors"
                  >
                    Abrir recurso →
                  </a>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="organizations" className="grid md:grid-cols-2 gap-4" data-stagger>
            {activeTab === 'organizations' && resources.organizations.map((org, index) => (
              <Card
                key={index}
                data-reveal
                className="reveal reveal-up border-slate-200 cursor-pointer"
                onClick={() => window.open(getOrgUrl(org), '_blank', 'noopener,noreferrer')}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') window.open(getOrgUrl(org), '_blank', 'noopener,noreferrer'); }}
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
                    href={getOrgUrl(org)} target="_blank" rel="noopener noreferrer"
                    className="text-slate-900 hover:text-slate-700 font-medium transition-colors"
                  >
                    Visitar sitio web →
                  </a>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Se eliminan Marcos, Herramientas y Cursos para dejar solo las tres mini-pestañas solicitadas */}

          <TabsContent value="books" data-stagger>
            {activeTab === 'books' && (
              <Card className="reveal reveal-up border-slate-200" data-reveal>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-slate-900">Libros recomendados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Armas de destrucción matemática</h4>
                    <p className="text-slate-600 text-sm mb-2">Cathy O'Neil (ed. en español)</p>
                    <p className="text-slate-700">Cómo los algoritmos amplifican la desigualdad y amenazan la democracia.</p>
                    <a href="https://capitanswing.com/libros/armas-de-destruccion-matematica/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">Más info →</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Atlas de la IA</h4>
                    <p className="text-slate-600 text-sm mb-2">Kate Crawford</p>
                    <p className="text-slate-700">Una mirada crítica a los costes sociales, políticos y ambientales de la IA.</p>
                    <a href="https://capitanswing.com/libros/atlas-de-la-ia/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">Más info →</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Ética para máquinas</h4>
                    <p className="text-slate-600 text-sm mb-2">José Ignacio Latorre</p>
                    <p className="text-slate-700">Reflexión sobre qué valores deben guiar a los sistemas inteligentes.</p>
                    <a href="https://www.planetadelibros.com/libro-etica-para-maquinas/292706" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">Más info →</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Human Compatible (Compatibles con humanos)</h4>
                    <p className="text-slate-600 text-sm mb-2">Stuart Russell</p>
                    <p className="text-slate-700">Cómo alinear la IA con objetivos humanos y evitar riesgos.</p>
                    <a href="https://www.alianzaeditorial.es/libro/libros-singulares-ls/human-compatible-stuart-russell-9788491816999/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">Más info →</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Privacidad es poder</h4>
                    <p className="text-slate-600 text-sm mb-2">Carissa Véliz</p>
                    <p className="text-slate-700">La privacidad como valor democrático frente a la economía de datos.</p>
                    <a href="https://www.penguinlibros.com/es/filosofia/287570-libro-privacidad-es-poder-9788418619347" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">Más info →</a>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;
