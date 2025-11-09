import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function ImpactosSocialesSection() {
  return (
    <section id="impactos" className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-100">
            Impactos Sociales y Dimensiones Eticas de la IA
          </h1>
          <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
            Como la inteligencia artificial transforma el trabajo, la educacion, la ciencia y la vida social, y por que exige nuevas responsabilidades eticas, politicas y colectivas.
          </p>
        </div>

        {/* Imagen representativa */}
        <div className="mb-12 flex justify-center">
          <img
            src="https://source.unsplash.com/1200x500/?artificial-intelligence,ethics,society"
            alt="IA, sociedad y etica"
            className="w-full md:w-4/5 rounded-xl shadow-xl opacity-95"
          />
        </div>

        {/* Contexto CTS */}
        <div className="mb-10 text-center text-gray-300 max-w-4xl mx-auto">
          La IA no avanza sola: esta orientada por decisiones humanas, sociales y politicas. La etica requiere miradas interdisciplinarias y herramientas de gobernanza concretas.
        </div>

        {/* Seccion: Sociedad */}
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Sociedad: impactos y responsabilidades colectivas</h2>
        {/* Grid principal: tarjetas de contenido */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bloque: Transformaciones y brechas (Sociedad) */}
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">Transformaciones y brechas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-gray-200">Trabajo y habilidades</p>
                <p>
                  La IA automatiza tareas rutinarias y reconfigura ocupaciones. Segun la OIT (2023), la mayor exposicion se da en tareas administrativas; el Foro Economico Mundial (Future of Jobs 2023) proyecta para 2023–2027 una recomposicion del empleo con desplazamientos y creacion de nuevos puestos, y ~44% de habilidades en evolucion.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-200">Educacion y comunicacion</p>
                <p>
                  La IA generativa facilita tutorias y apoyo a la escritura, pero exige politicas de uso responsable, transparencia y evaluacion justa. UNESCO (Guia para IA generativa en educacion, 2023).
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-200">Desinformacion y esfera publica</p>
                <p>
                  La proliferacion de contenidos sinteticos y deepfakes amplifica la desinformacion. El WEF (Global Risks 2024) la situa como riesgo critico a corto plazo; UNESCO (2023) propone directrices para plataformas digitales.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-200">Brecha digital</p>
                <p>
                  El acceso desigual a conectividad, datos y computo profundiza inequidades. La UIT (2023) estima ~67% de la poblacion conectada y 2.6 mil millones sin conexion, condicionando quien puede beneficiarse de la IA.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bloque: Derechos, alfabetizacion y etica social (Sociedad) */}
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">Derechos, alfabetizacion y etica social</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-gray-200">Derechos fundamentales</p>
                <p>
                  En justicia, salud, credito o servicios publicos, la IA puede introducir sesgos o afectar privacidad si carece de evaluaciones de impacto y explicabilidad. Referencias: Recomendacion UNESCO sobre la Etica de la IA (2021), Principios de IA de la OCDE (2019), NIST AI RMF 1.0 (2023), OMS (2023) en salud.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-200">Alfabetizacion digital y etica</p>
                <p>
                  Toda la sociedad necesita competencias para comprender limites, sesgos y buenas practicas de IA. UNESCO (2023) y OCDE (2023) subrayan formacion docente, politicas institucionales y proteccion de datos.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-200">Etica participativa</p>
                <p>
                  La IA debe evaluarse con participacion de comunidades afectadas y equipos diversos, con rendicion de cuentas. Referencias: UNESCO (2021) e IEEE Ethically Aligned Design.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-200">Ejemplo CTS</p>
                <p>
                  Automatizacion y desigualdad: sin politicas de transicion (formacion, movilidad laboral, proteccion social), la IA puede concentrar beneficios y ampliar brechas salariales. WEF (2023); OCDE (2023).
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seccion: Interacciones CTS */}
        <h2 className="mt-10 text-2xl font-semibold text-gray-200 mb-4">Interacciones CTS (Ciencia–Tecnologia–Sociedad)</h2>
        {/* Segunda fila: Bloques CTS */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Orientacion humana y politica</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La eleccion de problemas, datos y metricas refleja valores e incentivos. Marcos como la Ley de IA de la UE (2024), el NIST AI RMF (2023) y los Principios de la OCDE (2019) encauzan el desarrollo hacia usos responsables basados en riesgo.
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Enfoque interdisciplinario</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Los dilemas eticos requieren integrar ingenieria, ciencias sociales, filosofia, derecho, comunicacion, economia y diseno. Recomendado por UNESCO, IEEE y NIST para requisitos de seguridad, explicabilidad, equidad y gobernanza de datos.
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Innovacion con responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Lo que la IA puede hacer no siempre es lo que la sociedad debe permitir. Aplicar proporcionalidad, precaucion, evaluacion de impacto y supervision humana; ensayar en dominios criticos y documentar modelos y datos.
            </CardContent>
          </Card>
        </div>

        {/* Imagen de principios eticos de la IA */}
        <div className="mt-8">
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl">
            <CardHeader>
              <CardTitle className="text-gray-100">Principios eticos de la IA</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/img/principios-eticos-ia.png"
                alt="Principios eticos de la IA"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  // Si falla la carga local, mostramos un bloque de texto como respaldo
                  e.currentTarget.replaceWith(Object.assign(document.createElement('div'), { className: 'text-gray-300 text-center py-4', innerText: 'Imagen no disponible. Principios: Responsable, Equitativa, Segura y protegida, Explicable y transparente, Centrada en las personas.' }));
                }}
              />
              <p className="mt-3 text-sm text-gray-400 text-center">
                Representacion visual de principios eticos: responsable, equitativa, segura y protegida, explicable y transparente, centrada en las personas.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Reflexion final (CTS) */}
        <div className="mt-8 p-6 bg-gray-900/60 border border-gray-700 rounded-xl text-gray-200">
          <p className="leading-relaxed">
            <span className="font-semibold">Reflexion final:</span> equilibrar innovacion con responsabilidad requiere participacion publica y mecanismos de rendicion de cuentas. Auditorias de sesgo, comites de etica, tableros de riesgo y consulta a comunidades afectadas fortalecen legitimidad y reducen danos (UNESCO 2021; NIST 2023; OMS 2023; OCDE 2019).
          </p>
        </div>

        {/* Fuentes clave (Sociedad) */}
        <div className="mt-10 text-sm text-gray-400">
          <p className="font-semibold text-gray-300">Fuentes clave</p>
          <p>
            UNESCO (2021, 2023); OCDE (2019, 2023); NIST (2023); OMS (2023); UIT (2023); WEF (2023–2024); OIT (2023).
          </p>
        </div>
      </div>
    </section>
  );
}
