import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function ImpactosSocialesSection() {
  return (
    <section id="impactos" className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-100">Impactos sociales y ejes de ética de la IA</h1>
          <p className="mt-3 text-gray-300 max-w-3xl mx-auto">
            Cómo la IA transforma el trabajo, la educación, la ciencia y la vida social a la luz de principios de derechos humanos: inclusión y no discriminación, supervisión humana, transparencia y explicabilidad, rendición de cuentas, sostenibilidad y gobernanza del riesgo.
          </p>
        </div>

        {/* Imagen principal: Principios Éticos de la IA */}
        <div className="mb-12 flex justify-center">
          <img src="/img/principios-eticos-ia.png" alt="Principios Éticos de la IA" className="w-full md:w-4/5 rounded-xl shadow-xl opacity-95" />
        </div>

        {/* Contexto CTS */}
        <div className="mb-10 text-center text-gray-300 max-w-4xl mx-auto">
          El marco internacional de ética de la IA (2021) enfatiza que la tecnología refleja decisiones humanas, sociales y políticas. La ética requiere enfoques interdisciplinarios, participación de las comunidades afectadas y mecanismos de gobernanza verificables.
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
              La IA automatiza tareas y redefine ocupaciones. El marco UNESCO pide evaluar impactos en derechos laborales, planificar transición justa, reskilling continuo y salvaguardas frente a discriminación algorítmica.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Educación y comunicación</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La IA generativa puede ampliar tutorías y accesibilidad, pero debe usarse con integridad académica, protección de datos, transparencia sobre fuentes y acompañamiento docente para evitar nuevas brechas.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Desinformación y esfera pública</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La integridad de la información es clave: los contenidos sintéticos y deepfakes exigen trazabilidad, etiquetado claro y responsabilidad de plataformas para proteger el debate democrático.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Brecha digital</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La desigualdad en conectividad y capacidades limita quién se beneficia. “No dejar a nadie atrás” implica infraestructura, datos representativos y diseño inclusivo para lenguas y contextos locales.
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
              En justicia, salud, crédito o servicios públicos, la diligencia debida exige evaluaciones de impacto en derechos, explicabilidad, control humano significativo y vías de reparación.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Alfabetización digital y ética</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La UNESCO demanda capacidades para comprender límites, sesgos y buenas prácticas de IA. Se requieren programas formativos, políticas institucionales claras y protección efectiva de datos personales.
            </CardContent>
          </Card>
          <Card className="bg-gray-900/60 border border-gray-700 rounded-xl transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-100">Ética participativa</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              La evaluación de IA debe incluir a comunidades afectadas, equipos diversos y mecanismos de rendición de cuentas que documenten decisiones y modelos.
            </CardContent>
          </Card>
        </div>

        {/* Fuentes clave (Sociedad) */}
        <div className="mt-10 text-sm text-gray-400">
          <p className="font-semibold text-gray-300">Fuentes clave</p>
          <p>UNESCO (Recomendación sobre la Ética de la IA, SHS/BIO/PI/2021/1; 2023); OCDE (2019, 2023); NIST (2023); OMS (2023); UIT (2023); WEF (2023-2024); OIT (2023).</p>
        </div>
      </div>
    </section>
  );
}
