import React from 'react';
import { Scale, Shield, Eye, Users, Briefcase, Camera, AlertTriangle, Cpu } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const KeyTopicsSection = () => {
  const topics = [
    {
      icon: Scale,
      title: 'Sesgo y Equidad',
      description: 'Identificación y mitigación de sesgos algorítmicos en sistemas de IA',
      content: 'Los sistemas de IA pueden heredar y amplificar sesgos existentes en los datos de entrenamiento, resultando en discriminación sistemática contra grupos específicos. Es fundamental desarrollar metodologías para detectar, medir y corregir estos sesgos, asegurando que los sistemas de IA tomen decisiones justas e imparciales independientemente de características como raza, género, edad o condición socioeconómica.',
      image: 'https://images.unsplash.com/photo-1607074245269-848539fe3335'
    },
    {
      icon: Shield,
      title: 'Privacidad y Protección de Datos',
      description: 'Salvaguardar la información personal en la era de la IA',
      content: 'Los sistemas de IA requieren grandes cantidades de datos para funcionar efectivamente, lo que plantea serias preocupaciones sobre la privacidad. Es esencial implementar técnicas como el aprendizaje federado, la privacidad diferencial y el cifrado homomórfico para proteger los datos personales mientras se mantiene la utilidad del modelo. Las organizaciones deben cumplir con regulaciones como GDPR y establecer políticas claras sobre recopilación, uso y almacenamiento de datos.',
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec'
    },
    {
      icon: Eye,
      title: 'Transparencia y Explicabilidad',
      description: 'Comprender cómo los sistemas de IA toman decisiones',
      content: 'La "caja negra" de muchos sistemas de IA presenta desafíos éticos significativos. La explicabilidad (XAI) busca hacer que las decisiones de IA sean comprensibles para los humanos. Esto es especialmente crítico en aplicaciones de alto riesgo como diagnósticos médicos, decisiones judiciales y aprobación de créditos, donde las personas afectadas tienen derecho a entender por qué se tomó una decisión específica.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      icon: Users,
      title: 'Responsabilidad y Rendición de Cuentas',
      description: 'Establecer marcos de responsabilidad para sistemas autónomos',
      content: 'Cuando un sistema de IA causa daño, surge la pregunta: ¿quién es responsable? Los marcos de rendición de cuentas deben abordar la cadena de responsabilidad desde desarrolladores, organizaciones implementadoras hasta usuarios finales. Se necesitan mecanismos legales y regulatorios claros para establecer responsabilidad, junto con sistemas de auditoría y supervisión continua del rendimiento de la IA.',
      image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46'
    },
    {
      icon: Briefcase,
      title: 'Impacto Laboral y Social',
      description: 'Consecuencias de la automatización en el empleo y la sociedad',
      content: 'La automatización impulsada por IA está transformando el mercado laboral, eliminando ciertos trabajos mientras crea otros nuevos. Es crucial desarrollar políticas que apoyen la transición laboral, programas de reentrenamiento y redes de seguridad social. También debemos considerar cómo la IA afecta la desigualdad económica y garantizar que los beneficios de la tecnología se distribuyan equitativamente.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      icon: Camera,
      title: 'Vigilancia y Control',
      description: 'Balance entre seguridad y derechos civiles',
      content: 'Las tecnologías de IA como el reconocimiento facial y análisis de comportamiento permiten niveles de vigilancia sin precedentes. Esto plantea preocupaciones sobre privacidad, libertad de expresión y potencial abuso por gobiernos autoritarios. Es necesario establecer límites claros sobre el uso de tecnologías de vigilancia, garantizar supervisión democrática y proteger los derechos fundamentales.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9'
    },
    {
      icon: AlertTriangle,
      title: 'Deepfakes y Desinformación',
      description: 'Combatir la manipulación mediática generada por IA',
      content: 'Los deepfakes y contenido sintético generado por IA presentan amenazas significativas a la integridad de la información. Pueden usarse para difundir desinformación, manipular elecciones, cometer fraude y dañar reputaciones. Se necesitan soluciones técnicas para detectar contenido manipulado, marcos legales para penalizar el uso malicioso, y educación pública sobre alfabetización mediática.',
      image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5'
    },
    {
      icon: Cpu,
      title: 'Sistemas Autónomos',
      description: 'Ética de la toma de decisiones automatizada',
      content: 'Los sistemas autónomos, desde vehículos sin conductor hasta armas autónomas, plantean dilemas éticos complejos. ¿Cómo deben tomar decisiones de vida o muerte? ¿Qué nivel de autonomía es apropiado en diferentes contextos? Se necesitan directrices éticas claras, supervisión humana significativa y prohibiciones en aplicaciones que violen derechos humanos fundamentales.',
      image: 'https://images.unsplash.com/photo-1694729101068-a2c621f877b4'
    }
  ];

  return (
    <section id="temas-claves" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 data-reveal className="reveal reveal-up text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Temas Claves
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explorando los principios fundamentales y desafíos éticos en el desarrollo de la inteligencia artificial
          </p>
        </div>

        <div className="grid gap-8 mb-16" data-stagger>
          {topics.slice(0, 4).map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card key={index} data-reveal className="reveal reveal-up border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-serif text-slate-900 mb-2">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {topic.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="text-slate-700 leading-relaxed">{topic.content}</p>
                    </div>
                    <div className="md:col-span-1">
                      <img
                        src={topic.image}
                        alt={topic.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
            Temas Adicionales
          </h3>
          <Accordion type="single" collapsible className="space-y-4" data-stagger>
            {topics.slice(4).map((topic, index) => {
              const Icon = topic.icon;
              return (
                <AccordionItem
                  key={index + 4}
                  value={`item-${index + 4}`}
                  data-reveal
                  className="reveal reveal-up border border-slate-200 px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-slate-700" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-serif font-semibold text-slate-900">
                          {topic.title}
                        </h4>
                        <p className="text-sm text-slate-600">{topic.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <p className="text-slate-700 leading-relaxed">{topic.content}</p>
                      </div>
                      <div className="md:col-span-1">
                        <img
                          src={topic.image}
                          alt={topic.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default KeyTopicsSection;
