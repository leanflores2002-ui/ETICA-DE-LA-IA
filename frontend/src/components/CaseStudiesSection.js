import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronRight } from 'lucide-react';

const CaseStudiesSection = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Reconocimiento Facial y Sesgo Racial',
      category: 'Sesgo Algorítmico',
      year: '2018-2020',
      summary: 'Estudios revelan tasas de error significativamente más altas en sistemas de reconocimiento facial para personas de color.',
      description: 'Investigaciones de MIT y Stanford demostraron que sistemas comerciales de reconocimiento facial tienen tasas de error de hasta 34% más altas para mujeres de piel oscura comparado con hombres de piel clara. Empresas como Amazon, Microsoft e IBM enfrentaron críticas y algunas suspendieron temporalmente la venta de esta tecnología a policías. Este caso ilustra cómo los sesgos en datos de entrenamiento pueden perpetuar discriminación racial sistemática.',
      implications: [
        'Arrestos erróneos basados en identificaciones incorrectas',
        'Discriminación sistemática en sistemas de vigilancia',
        'Pérdida de confianza pública en tecnologías de IA',
        'Llamados a regulación gubernamental más estricta'
      ],
      lessons: [
        'Necesidad de datasets de entrenamiento diversos y representativos',
        'Auditorías independientes antes del despliegue',
        'Transparencia sobre limitaciones y tasas de error',
        'Consideración de impactos desproporcionados en comunidades marginadas'
      ],
      image: 'https://images.unsplash.com/photo-1559137771-536eecb999ab'
    },
    {
      id: 2,
      title: 'Vehículos Autónomos: El Dilema Moral',
      category: 'Toma de Decisiones Autónoma',
      year: '2016-Presente',
      summary: 'Los accidentes fatales de vehículos autónomos plantean preguntas sobre responsabilidad y programación de decisiones éticas.',
      description: 'Varios incidentes, incluyendo el accidente fatal de Uber en 2018 en Arizona, han expuesto los desafíos éticos de los vehículos autónomos. ¿Cómo debe un vehículo decidir en situaciones donde el daño es inevitable? ¿Quién es responsable cuando falla el sistema: el fabricante, el desarrollador del software, o el "conductor"? El experimento "Máquina Moral" del MIT reveló diferencias culturales significativas en juicios éticos sobre estas decisiones.',
      implications: [
        'Necesidad de marcos legales claros sobre responsabilidad',
        'Desafíos en la programación de dilemas éticos',
        'Diferencias culturales en valores morales',
        'Impacto en seguros y regulación vehicular'
      ],
      lessons: [
        'Imposibilidad de codificar todas las situaciones éticas posibles',
        'Importancia de mantener supervisión humana en sistemas críticos',
        'Necesidad de transparencia en algoritmos de toma de decisiones',
        'Desarrollo de estándares internacionales para sistemas autónomos'
      ],
      image: 'https://images.unsplash.com/photo-1694729101068-a2c621f877b4'
    },
    {
      id: 3,
      title: 'COMPAS: Sesgo en Justicia Predictiva',
      category: 'Justicia y Equidad',
      year: '2016',
      summary: 'El algoritmo de predicción de reincidencia muestra sesgos raciales en el sistema de justicia criminal estadounidense.',
      description: 'ProPublica reveló que COMPAS, un algoritmo usado por tribunales para predecir probabilidad de reincidencia, era significativamente más propenso a etiquetar falsamente a acusados negros como alto riesgo (45%) comparado con acusados blancos (23%). A pesar de que el algoritmo no usaba directamente la raza, variables correlacionadas resultaron en discriminación indirecta. Este caso generó debates sobre el uso de IA en decisiones judiciales.',
      implications: [
        'Perpetuación de sesgos sistémicos en el sistema judicial',
        'Cuestionamiento de la "objetividad" algorítmica',
        'Impacto desproporcionado en comunidades de color',
        'Debates sobre debido proceso y derecho a explicación'
      ],
      lessons: [
        'Los algoritmos pueden discriminar incluso sin usar características protegidas directamente',
        'Necesidad de auditorías externas de sistemas de IA en contextos de alto riesgo',
        'Importancia de considerar equidad junto con precisión',
        'Valor de la supervisión humana en decisiones que afectan libertad individual'
      ],
      image: 'https://images.pexels.com/photos/8090125/pexels-photo-8090125.jpeg'
    },
    {
      id: 4,
      title: 'Cambridge Analytica y Manipulación Electoral',
      category: 'Privacidad y Manipulación',
      year: '2018',
      summary: 'Uso no autorizado de datos de millones de usuarios de Facebook para influir en elecciones y referéndums.',
      description: 'Cambridge Analytica recopiló datos de hasta 87 millones de usuarios de Facebook sin consentimiento explícito, usando perfiles psicológicos generados por IA para crear campañas políticas micro-dirigidas durante elecciones en EE.UU., Reino Unido y otros países. El escándalo expuso cómo los datos personales pueden ser explotados para manipular opinión pública y procesos democráticos, llevando a Facebook a enfrentar multas masivas y escrutinio regulatorio.',
      implications: [
        'Amenaza a la integridad de procesos democráticos',
        'Violaciones masivas de privacidad de datos',
        'Manipulación psicológica a escala sin precedentes',
        'Crisis de confianza en plataformas de redes sociales'
      ],
      lessons: [
        'Necesidad urgente de regulaciones de protección de datos (como GDPR)',
        'Riesgos de permitir que datos personales se conviertan en mercancía',
        'Importancia de consentimiento informado y transparencia',
        'Responsabilidad de plataformas en proteger datos de usuarios'
      ],
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec'
    },
    {
      id: 5,
      title: 'IA en Diagnóstico Médico: Promesas y Riesgos',
      category: 'Salud y Medicina',
      year: '2019-Presente',
      summary: 'Sistemas de IA demuestran alta precisión en diagnósticos, pero plantean preguntas sobre responsabilidad y acceso equitativo.',
      description: 'Algoritmos de deep learning han mostrado capacidad para igualar o superar a radiólogos en detección de cáncer, enfermedades oculares y otras condiciones. Sin embargo, estudios revelan que muchos modelos funcionan peor en poblaciones subrepresentadas en datos de entrenamiento. El caso del algoritmo de salud de UnitedHealth que favorecía a pacientes blancos sobre negros con necesidades de salud similares destacó riesgos de sesgo en IA médica.',
      implications: [
        'Potencial para mejorar acceso y precisión de diagnósticos',
        'Riesgo de ampliar disparidades existentes en atención médica',
        'Preguntas sobre responsabilidad en errores diagnósticos',
        'Necesidad de validación rigurosa antes de implementación clínica'
      ],
      lessons: [
        'Validación en poblaciones diversas es crítica',
        'IA debe complementar, no reemplazar, juicio médico humano',
        'Transparencia sobre cómo funcionan los algoritmos es esencial para confianza',
        'Regulación debe equilibrar innovación con seguridad del paciente'
      ],
      image: 'https://images.pexels.com/photos/8439076/pexels-photo-8439076.jpeg'
    },
    {
      id: 6,
      title: 'Deepfakes: De Entretenimiento a Amenaza',
      category: 'Desinformación',
      year: '2020-Presente',
      summary: 'Videos y audio generados por IA crean desafíos para verificación de autenticidad y confianza en medios.',
      description: 'La tecnología deepfake ha evolucionado de curiosidad técnica a herramienta para desinformación, acoso y fraude. Casos incluyen videos falsos de políticos, pornografía no consensuada de celebridades, y fraudes empresariales donde criminales imitaron voces de ejecutivos para aprobar transferencias financieras. La facilidad creciente de crear deepfakes convincentes plantea desafíos existenciales para confianza en evidencia audiovisual.',
      implications: [
        'Erosión de confianza en evidencia audiovisual',
        'Nuevas formas de acoso y abuso, especialmente contra mujeres',
        'Amenaza a integridad electoral y discurso público',
        'Desafíos para verificación periodística y judicial'
      ],
      lessons: [
        'Necesidad urgente de tecnologías de detección de deepfakes',
        'Importancia de alfabetización mediática pública',
        'Marcos legales deben abordar creación y distribución maliciosa',
        'Plataformas tecnológicas deben implementar medidas de autenticación'
      ],
      image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5'
    }
  ];

  return (
    <section id="casos-estudio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 data-reveal className="reveal reveal-up text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Casos de Estudio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Análisis profundo de incidentes reales que ilustran desafíos éticos en la implementación de IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-stagger>
          {caseStudies.map((caseStudy) => (
            <Card
              key={caseStudy.id}
              data-reveal
              className="reveal reveal-up cursor-pointer hover:shadow-lg transition-shadow border-slate-200"
              onClick={() => setSelectedCase(caseStudy)}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {caseStudy.category}
                  </Badge>
                  <span className="text-xs text-slate-500">{caseStudy.year}</span>
                </div>
                <CardTitle className="text-xl font-serif text-slate-900">
                  {caseStudy.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {caseStudy.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="flex items-center text-slate-700 hover:text-slate-900 font-medium transition-colors">
                  <span>Leer más</span>
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedCase && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="secondary">{selectedCase.category}</Badge>
                    <span className="text-sm text-slate-500">{selectedCase.year}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900">
                    {selectedCase.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-slate-500 hover:text-slate-900 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-64 object-cover"
                />
                
                <div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Resumen</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedCase.summary}</p>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Descripción Detallada</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedCase.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Implicaciones</h4>
                  <ul className="space-y-2">
                    {selectedCase.implications.map((implication, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-slate-700 mr-2">•</span>
                        <span className="text-slate-700">{implication}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Lecciones Aprendidas</h4>
                  <ul className="space-y-2">
                    {selectedCase.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-slate-700 mr-2">•</span>
                        <span className="text-slate-700">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
