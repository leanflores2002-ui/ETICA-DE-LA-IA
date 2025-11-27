import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function ImpactosSocialesSection() {
  return (
    <section id="impactos" className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-100">Impactos Sociales y Dimensiones Éticas de la IA</h1>
          <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
            Cómo la inteligencia artificial transforma el trabajo, la educación, la ciencia y la vida social, y por qué exige nuevas responsabilidades éticas, políticas y colectivas.
          </p>
        </div>

        {/* Imagen principal: Principios éticos de la IA */}
        <div className="mb-12 flex justify-center">
          <img src="/img/principios-eticos-ia.png" alt="Principios éticos de la IA" className="w-full md:w-4/5 rounded-xl shadow-xl opacity-95" />
        </div>

        {/* Contexto CTS */}
        <div className="mb-10 text-center text-gray-300 max-w-4xl mx-auto">
          La IA no avanza sola: está orientada por decisiones humanas, sociales y políticas. La ética requiere miradas interdisciplinarias y herramientas de gobernanza concretas.
        </div>

        {/* Sección: Sociedad */}
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Sociedad: impactos y responsabilidades colectivas</h2>
        {/* Transformaciones y brechas */}
        <h3 className="text-lg font-semibold text-gray-300 mt-6 mb-3">Transformaciones y brechas</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Trabajo y habilidades</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La IA automatiza tareas rutinarias y reconfigura ocupaciones. La mayor exposición se da en tareas administrativas; entre 2023 y 2027 se espera una recomposición del empleo con desplazamientos y creación de nuevos puestos, y cerca de 44% de habilidades en evolución.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Educación y comunicación</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La IA generativa facilita tutorías y apoyo a la escritura, pero exige políticas de uso responsable, transparencia y evaluación justa.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Desinformación y esfera pública</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La proliferación de contenidos sintéticos y deepfakes amplifica la desinformación; es un riesgo crítico a corto plazo y se requieren directrices para plataformas digitales.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Brecha digital</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              El acceso desigual a conectividad, datos y cómputo profundiza inequidades; millones de personas siguen sin conexión, lo que condiciona quién puede beneficiarse de la IA.
            </CardContent>
          </Card>
        </div>

        {/* Derechos, alfabetización y ética social */}
        <h3 className="text-lg font-semibold text-gray-300 mt-8 mb-3">Derechos, alfabetización y ética social</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Derechos fundamentales</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              En justicia, salud, crédito o servicios públicos, la IA puede introducir sesgos o afectar privacidad si carece de evaluaciones de impacto y explicabilidad.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Alfabetización digital y ética</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Toda la sociedad necesita competencias para comprender límites, sesgos y buenas prácticas de IA. Se requieren formación docente, políticas institucionales y protección de datos.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Ética participativa</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La IA debe evaluarse con participación de comunidades afectadas y equipos diversos, con rendición de cuentas.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Ejemplo CTS</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Automatización y desigualdad: sin políticas de transición (formación, movilidad laboral, protección social), la IA puede concentrar beneficios y ampliar brechas salariales.
            </CardContent>
          </Card>
        </div>

        {/* Sección: Interacciones CTS */}
        <h2 className="mt-10 text-2xl font-semibold text-gray-200 mb-4">Interacciones CTS (Ciencia-Tecnología-Sociedad)</h2>
        {/* Segunda fila: Bloques CTS */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Orientación humana y política</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La elección de problemas, datos y métricas refleja valores e incentivos. Marcos regulatorios y de gestión de riesgos encauzan el desarrollo hacia usos responsables basados en riesgo.
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Enfoque interdisciplinario</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Los dilemas éticos requieren integrar ingeniería, ciencias sociales, filosofía, derecho, comunicación, economía y diseño. Es clave para garantizar seguridad, explicabilidad, equidad y buena gobernanza de datos.
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Innovación con responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Lo que la IA puede hacer no siempre es lo que la sociedad debe permitir. Aplicar proporcionalidad, precaución, evaluación de impacto y supervisión humana; ensayar en dominios críticos y documentar modelos y datos.
            </CardContent>
          </Card>
        </div>

        {/* Reflexión final (CTS) */}
        <div className="mt-8 p-6 bg-gray-900/60 border border-gray-700 rounded-xl text-gray-200">
          <p className="leading-relaxed">
            <span className="font-semibold">Reflexión final:</span> equilibrar innovación con responsabilidad requiere participación pública y mecanismos de rendición de cuentas.
            Auditorías de sesgo, comités de ética, tableros de riesgo y consulta a comunidades afectadas fortalecen legitimidad y reducen daños.
          </p>
        </div>

        {/* Fuentes clave (Sociedad) */}
        <div className="mt-10 text-sm text-gray-400">
          <p className="font-semibold text-gray-300">Fuentes clave</p>
          <p>UNESCO (2021, 2023); OCDE (2019, 2023); NIST (2023); OMS (2023); UIT (2023); WEF (2023-2024); OIT (2023).</p>
        </div>
      </div>
    </section>
  );
}
