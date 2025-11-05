import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const SociedadSection = () => {
  return (
    <section id="sociedad" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal className="reveal reveal-up text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Sociedad: impactos y responsabilidades colectivas
          </h2>
          <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
            Cómo la IA reconfigura el trabajo, la educación, la comunicación y los derechos; y por qué la alfabetización digital y la participación pública son claves para una ética inclusiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" data-stagger>
          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle className="text-xl">Transformaciones y brechas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <div>
                <p className="font-semibold">Trabajo y habilidades</p>
                <p>
                  La IA automatiza tareas rutinarias y reconfigura ocupaciones. Según la OIT (2023), la mayor exposición se da en tareas administrativas; el Foro Económico Mundial (Future of Jobs 2023) proyecta para 2023–2027 una recomposición del empleo con desplazamientos y creación de nuevos puestos, y ~44% de habilidades en evolución.
                </p>
              </div>
              <div>
                <p className="font-semibold">Educación y comunicación</p>
                <p>
                  La IA generativa facilita tutorías y apoyo a la escritura, pero exige políticas de uso responsable, transparencia y evaluación justa. UNESCO (Guía para IA generativa en educación, 2023).
                </p>
              </div>
              <div>
                <p className="font-semibold">Desinformación y esfera pública</p>
                <p>
                  La proliferación de contenidos sintéticos y deepfakes amplifica la desinformación. El WEF (Global Risks 2024) la sitúa como riesgo crítico a corto plazo; UNESCO (2023) propone directrices para plataformas digitales.
                </p>
              </div>
              <div>
                <p className="font-semibold">Brecha digital</p>
                <p>
                  El acceso desigual a conectividad, datos y cómputo profundiza inequidades. La UIT (2023) estima ~67% de la población conectada y 2.6 mil millones sin conexión, condicionando quién puede beneficiarse de la IA.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle className="text-xl">Derechos, alfabetización y ética social</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <div>
                <p className="font-semibold">Derechos fundamentales</p>
                <p>
                  En justicia, salud, crédito o servicios públicos, la IA puede introducir sesgos o afectar privacidad si carece de evaluaciones de impacto y explicabilidad. Referencias: Recomendación UNESCO sobre la Ética de la IA (2021), Principios de IA de la OCDE (2019), NIST AI RMF 1.0 (2023), OMS (2023) en salud.
                </p>
              </div>
              <div>
                <p className="font-semibold">Alfabetización digital y ética</p>
                <p>
                  Toda la sociedad necesita competencias para comprender límites, sesgos y buenas prácticas de IA. UNESCO (2023) y OCDE (2023) subrayan formación docente, políticas institucionales y protección de datos.
                </p>
              </div>
              <div>
                <p className="font-semibold">Ética participativa</p>
                <p>
                  La IA debe evaluarse con participación de comunidades afectadas y equipos diversos, con rendición de cuentas. Referencias: UNESCO (2021) e IEEE Ethically Aligned Design.
                </p>
              </div>
              <div>
                <p className="font-semibold">Ejemplo CTS</p>
                <p>
                  Automatización y desigualdad: sin políticas de transición (formación, movilidad laboral, protección social), la IA puede concentrar beneficios y ampliar brechas salariales. WEF (2023); OCDE (2023).
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-sm text-slate-500">
          <p className="font-semibold">Fuentes clave</p>
          <p>
            UNESCO (2021, 2023); OCDE (2019, 2023); NIST (2023); OMS (2023); UIT (2023); WEF (2023–2024); OIT (2023).
          </p>
        </div>
      </div>
    </section>
  );
};

export default SociedadSection;

