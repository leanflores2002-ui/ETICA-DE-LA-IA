import React, { useMemo, useState } from 'react';
import { ArrowLeft, ChevronRight, Sparkles } from 'lucide-react';

const SECTION_DATA = [
  {
    id: 'inicio',
    label: 'Inicio',
    path: '/',
    description: 'Presentaci�n del sitio y acceso a los temas destacados.',
    topics: [
      {
        id: 'inicio-presentacion',
        label: 'Presentaci�n del sitio',
        description:
          'La hero de �%tica de la Inteligencia Artificial introduce el foco en derechos humanos, inclusi�n, transparencia y responsabilidad.',
      },
      {
        id: 'inicio-cta',
        label: 'Explorar temas',
        description: 'El bot�n principal te lleva a Temas Claves para recorrer principios, riesgos y responsabilidades.',
      },
    ],
  },
  {
    id: 'temas',
    label: 'Temas Claves',
    path: '/temas',
    description: 'Principales dilemas �ticos y principios para sistemas de IA.',
    topics: [
      {
        id: 'temas-sesgo-equidad',
        label: 'Sesgo y Equidad',
        description: 'Identificaci�n y mitigaci�n de sesgos algor�tmicos para decisiones justas e imparciales.',
      },
      {
        id: 'temas-privacidad',
        label: 'Privacidad y Protecci�n de Datos',
        description: 'Uso responsable de datos personales con t�cnicas como privacidad diferencial y cumplimiento de GDPR.',
      },
      {
        id: 'temas-transparencia',
        label: 'Transparencia y Explicabilidad',
        description: 'Abrir la "caja negra" de la IA para comprender c�mo se toman decisiones que afectan a las personas.',
      },
      {
        id: 'temas-responsabilidad',
        label: 'Responsabilidad y Rendici�n de Cuentas',
        description: 'Marcos que definen qui�n responde por da�os, auditor�as y supervisi�n continua de modelos.',
      },
      {
        id: 'temas-impacto-laboral',
        label: 'Impacto Laboral y Social',
        description: 'Efectos de la automatizaci�n en empleo, reentrenamiento y distribuci�n equitativa de beneficios.',
      },
      {
        id: 'temas-vigilancia',
        label: 'Vigilancia y Control',
        description: 'L�mites para tecnolog�as como reconocimiento facial equilibrando seguridad y derechos civiles.',
      },
      {
        id: 'temas-deepfakes',
        label: 'Deepfakes y Desinformaci�n',
        description: 'Riesgos de contenido sint�tico y la necesidad de detecci�n, regulaci�n y alfabetizaci�n medi�tica.',
      },
      {
        id: 'temas-sistemas-autonomos',
        label: 'Sistemas Aut�nomos',
        description: 'Dilemas sobre autonom�a, decisiones cr�ticas y supervisi�n humana en veh�culos o aplicaciones de riesgo.',
      },
    ],
  },
  {
    id: 'estadisticas',
    label: 'Estad�sticas',
    path: '/estadisticas',
    description: 'Indicadores, visualizaciones y tablas 2023-2025.',
    topics: [
      {
        id: 'estadisticas-indicadores',
        label: 'Indicadores para una IA con derechos y rendici�n de cuentas',
        description:
          'Panorama inicial sobre derechos humanos, inclusi�n, transparencia, sostenibilidad y gobernanza del riesgo.',
      },
      {
        id: 'estadisticas-sector',
        label: 'Empresas, empleo, educaci�n y salud',
        description:
          'Tarjetas con hallazgos sobre adopci�n corporativa, reconversi�n laboral, integridad educativa y seguridad cl�nica.',
      },
      {
        id: 'estadisticas-mercado',
        label: 'Crecimiento del mercado de IA generativa',
        description: 'Gr�fico SVG con proyecciones 2020-2032 y tendencia de crecimiento compuesto.',
      },
      {
        id: 'estadisticas-riesgo',
        label: 'Cifras clave para gobernanza basada en riesgo',
        description:
          'Bloques comparativos sobre conectividad global, empleo desplazado/creado, habilidades afectadas y productividad.',
      },
      {
        id: 'estadisticas-tabla',
        label: 'Tabla resumen y nota metodol�gica',
        description:
          'Tabla con dominios, cifras y fuentes (UIT, WEF, MIT) m�s el recordatorio de usar siempre las fuentes originales.',
      },
    ],
  },
  {
    id: 'casos',
    label: 'Casos de Estudio',
    path: '/casos',
    description: 'Historias reales que ilustran riesgos y lecciones.',
    topics: [
      {
        id: 'casos-reconocimiento-facial',
        label: 'Reconocimiento facial y sesgo racial',
        description:
          'Errores m�s altos en mujeres de piel oscura muestran la necesidad de datos representativos y auditor�as constantes.',
      },
      {
        id: 'casos-autonomos',
        label: 'Veh�culos aut�nomos: el dilema moral',
        description:
          'Accidentes fatales abren preguntas sobre responsabilidad, supervisi�n y decisiones �ticas en situaciones cr�ticas.',
      },
      {
        id: 'casos-compas',
        label: 'COMPAS: sesgo en justicia predictiva',
        description:
          'El algoritmo de reincidencia favoreci� falsos positivos en personas negras, cuestionando la supuesta objetividad.',
      },
      {
        id: 'casos-cambridge',
        label: 'Cambridge Analytica y manipulaci�n electoral',
        description:
          'Uso no autorizado de datos de millones de usuarios para micro-segmentaci�n pol�tica y presi�n regulatoria posterior.',
      },
      {
        id: 'casos-salud',
        label: 'IA en diagn�stico m�dico: promesas y riesgos',
        description:
          'Modelos precisos que pueden reproducir inequidades si no se validan en poblaciones diversas con supervisi�n cl�nica.',
      },
      {
        id: 'casos-deepfakes',
        label: 'Deepfakes: de entretenimiento a amenaza',
        description:
          'Contenido sint�tico genera fraudes, acoso y desinformaci�n, exigiendo detecci�n t�cnica y alfabetizaci�n medi�tica.',
      },
    ],
  },
  {
    id: 'recursos',
    label: 'Recursos',
    path: '/recursos',
    description: 'Materiales, organizaciones y herramientas recomendadas.',
    topics: [
      {
        id: 'recursos-organizaciones',
        label: 'Organizaciones',
        description: 'AESIA, UNESCO, ODISEIA, Fundaci�n �%ticas, OECD.AI y otras iniciativas de supervisi�n y buenas pr�cticas.',
      },
      {
        id: 'recursos-papers',
        label: 'Recursos de informaci�n',
        description:
          'P�ginas y documentos como la Recomendaci�n UNESCO 2021, AI Act, RGPD y gu�as AEPD disponibles desde las cards.',
      },
      {
        id: 'recursos-libros',
        label: 'Libros recomendados',
        description:
          'Selecci�n en espa�ol como "Armas de destrucci�n matem�tica", "Atlas de la IA", "�%tica para m�quinas" y m�s.',
      },
      {
        id: 'recursos-herramientas',
        label: 'Herramientas y prompts usados',
        description: 'Documenta los prompts y recursos utilizados para dise�ar la p�gina, con captura de referencia.',
      },
    ],
  },
  {
    id: 'impactos',
    label: 'Impactos Sociales',
    path: '/impactos',
    description: 'Ejes �ticos y cambios sociales vinculados a la IA.',
    topics: [
      {
        id: 'impactos-sociedad',
        label: 'Sociedad: impactos y responsabilidades colectivas',
        description:
          'Revisi�n de c�mo la IA afecta trabajo, educaci�n, desinformaci�n y brecha digital bajo principios UNESCO.',
      },
      {
        id: 'impactos-transformaciones',
        label: 'Transformaciones y brechas',
        description:
          'Incluye trabajo y habilidades, educaci�n y comunicaci�n, desinformaci�n y esfera p�blica, y brecha digital.',
      },
      {
        id: 'impactos-derechos',
        label: 'Derechos, alfabetizaci�n y �tica social',
        description:
          'Subraya derechos fundamentales, alfabetizaci�n digital, �tica participativa y un ejemplo CTS aplicado.',
      },
      {
        id: 'impactos-cts',
        label: 'Interacciones CTS (Ciencia-Tecnolog�a-Sociedad)',
        description:
          'Bloques sobre orientaci�n humana y pol�tica, enfoque interdisciplinario e innovaci�n con responsabilidad.',
      },
      {
        id: 'impactos-reflexion',
        label: 'Reflexi�n final y fuentes clave',
        description:
          'Cierre que equilibra innovaci�n y responsabilidad, seguido de fuentes como UNESCO, OCDE, NIST, OMS, UIT, WEF y OIT.',
      },
    ],
  },
  {
    id: 'opiniones',
    label: 'Opiniones y Reflexiones',
    path: '/opiniones',
    description: 'Espacio participativo con enfoque responsable.',
    topics: [
      {
        id: 'opiniones-proposito',
        label: 'Prop�sito del espacio',
        description:
          'Invita a compartir ideas sobre �tica de la IA desde derechos humanos, inclusi�n, transparencia y gobernanza de riesgos.',
      },
      {
        id: 'opiniones-participacion',
        label: 'C�mo participar',
        description:
          'Formulario sencillo con nombre y comentario; las opiniones se guardan en tu navegador y se muestran en tarjetas.',
      },
      {
        id: 'opiniones-gestion',
        label: 'Ordenar y moderar aportes',
        description:
          'Puedes ordenar por m�s recientes o antiguos y borrar los comentarios almacenados localmente si necesit�s empezar de nuevo.',
      },
    ],
  },
];

export default function FloatingChatWidget() {
  const [open, setOpen] = useState(false);
  const [sectionId, setSectionId] = useState(null);
  const [topicId, setTopicId] = useState(null);

  const activeSection = useMemo(() => SECTION_DATA.find((s) => s.id === sectionId) || null, [sectionId]);
  const activeTopic = useMemo(
    () => activeSection?.topics?.find((t) => t.id === topicId) || null,
    [activeSection, topicId]
  );

  const closeWidget = () => {
    setOpen(false);
    setSectionId(null);
    setTopicId(null);
  };

  const backToSections = () => {
    setSectionId(null);
    setTopicId(null);
  };

  const backToTopics = () => {
    setTopicId(null);
  };

  const openSection = (id) => {
    setSectionId(id);
    setTopicId(null);
  };

  const stage = (() => {
    if (activeSection && activeTopic) return 'topic';
    if (activeSection) return 'topics';
    return 'sections';
  })();

  return (
    <div className="fixed z-[2000] bottom-4 right-4 select-none" aria-live="polite">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="h-14 w-14 rounded-full bg-slate-900 text-white shadow-xl hover:scale-105 active:scale-95 transition-transform grid place-items-center border border-slate-800"
          aria-label="Abrir asistente"
        >
          <span className="text-xl" role="img" aria-label="ayuda">
            �Y'�
          </span>
        </button>
      )}

      {open && (
        <div className="w-[86vw] max-w-[420px] md:max-w-[460px] max-h-[78vh] bg-slate-900/95 backdrop-blur rounded-2xl shadow-2xl border border-slate-800 overflow-hidden grid grid-rows-[auto,1fr]">
          <div className="bg-slate-900/90 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-300 flex items-center gap-1">
                <Sparkles size={14} className="text-amber-300" />
                Asistente guiado
              </p>
              <h3 className="font-serif font-semibold text-lg">Explor� tu sitio</h3>
              <p className="text-xs text-slate-400">Eleg� secciones y temas sin escribir</p>
            </div>
            <button
              type="button"
              onClick={closeWidget}
              className="px-2 py-1 text-slate-200 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
              aria-label="Cerrar asistente"
            >
              �-
            </button>
          </div>

          <div className="p-4 space-y-3 overflow-y-auto">
            {stage === 'sections' && (
              <div className="space-y-4">
                <p className="text-slate-100 text-sm leading-relaxed">
                  Hola, soy el asistente del sitio. Eleg� una secci�n para saber m�s y luego un tema dentro de ella:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SECTION_DATA.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => openSection(section.id)}
                      className="group text-left rounded-2xl border border-slate-800 bg-slate-800/70 hover:border-slate-600 hover:bg-slate-800/90 transition-colors p-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-[11px] uppercase tracking-[0.12em] text-slate-400">{section.path}</div>
                          <p className="text-base font-semibold text-white">{section.label}</p>
                          <p className="text-slate-200 text-sm mt-1 leading-relaxed">{section.description}</p>
                        </div>
                        <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {stage === 'topics' && activeSection && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={backToSections}
                    className="inline-flex items-center gap-1 text-xs text-slate-200 px-2.5 py-1.5 rounded-full border border-slate-700 hover:border-slate-500"
                  >
                    <ArrowLeft size={14} />
                    Volver al listado de secciones
                  </button>
                  {activeSection.path && (
                    <a
                      href={activeSection.path}
                      className="inline-flex items-center gap-1 text-xs text-amber-200 px-2.5 py-1.5 rounded-full border border-amber-300/40 hover:border-amber-200"
                    >
                      Ver secci�n en el sitio
                    </a>
                  )}
                </div>
                <div className="bg-slate-800/80 border border-slate-800 rounded-xl p-3">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">Paso 2</p>
                  <p className="text-white font-semibold">Ahora eleg� un tema dentro de {activeSection.label}:</p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {activeSection.topics.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setTopicId(topic.id)}
                      className="w-full text-left rounded-2xl border border-slate-800 bg-slate-800/70 hover:border-slate-500 hover:bg-slate-800/90 transition-colors p-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-base font-semibold text-white leading-snug">{topic.label}</p>
                          <p className="text-slate-200 text-sm mt-1 leading-relaxed">{topic.description}</p>
                        </div>
                        <ChevronRight size={18} className="text-slate-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {stage === 'topic' && activeSection && activeTopic && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={backToTopics}
                    className="inline-flex items-center gap-1 text-xs text-slate-200 px-2.5 py-1.5 rounded-full border border-slate-700 hover:border-slate-500"
                  >
                    <ArrowLeft size={14} />
                    Volver a los temas de esta secci�n
                  </button>
                  <button
                    type="button"
                    onClick={backToSections}
                    className="inline-flex items-center gap-1 text-xs text-slate-200 px-2.5 py-1.5 rounded-full border border-slate-700 hover:border-slate-500"
                  >
                    <ArrowLeft size={14} />
                    Ir al listado de secciones
                  </button>
                  {activeSection.path && (
                    <a
                      href={activeSection.path}
                      className="inline-flex items-center gap-1 text-xs text-amber-200 px-2.5 py-1.5 rounded-full border border-amber-300/40 hover:border-amber-200"
                    >
                      Ver secci�n en el sitio
                    </a>
                  )}
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-800/80 p-4 space-y-2 shadow-inner">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">{activeSection.label}</p>
                  <h4 className="text-xl font-semibold text-white leading-snug">{activeTopic.label}</h4>
                  <p className="text-slate-200 text-sm leading-relaxed">{activeTopic.description}</p>
                  <p className="text-xs text-slate-400">
                    Us� los botones para cambiar de tema o volver a otra secci�n. Este asistente no recibe texto libre.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
