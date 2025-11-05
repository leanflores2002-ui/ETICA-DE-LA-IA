import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CTSInteractionsSection = () => {
  return (
    <section id="cts" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal className="reveal reveal-up text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Interacciones CTS (Ciencia–Tecnología–Sociedad)
          </h2>
          <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
            La IA no avanza sola: está orientada por decisiones humanas, sociales y políticas. La ética requiere miradas interdisciplinarias y herramientas de gobernanza concretas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6" data-stagger>
          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Orientación humana y política</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              La elección de problemas, datos y métricas refleja valores e incentivos. Marcos como la Ley de IA de la UE (2024), el NIST AI RMF (2023) y los Principios de la OCDE (2019) encauzan el desarrollo hacia usos responsables basados en riesgo.
            </CardContent>
          </Card>
          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Enfoque interdisciplinario</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              Los dilemas éticos requieren integrar ingeniería, ciencias sociales, filosofía, derecho, comunicación, economía y diseño. Recomendado por UNESCO, IEEE y NIST para requisitos de seguridad, explicabilidad, equidad y gobernanza de datos.
            </CardContent>
          </Card>
          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Innovación con responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              Lo que la IA puede hacer no siempre es lo que la sociedad debe permitir. Aplicar proporcionalidad, precaución, evaluación de impacto y supervisión humana; ensayar en dominios críticos y documentar modelos y datos.
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 p-6 border border-slate-200 bg-white" data-reveal>
          <p className="text-slate-800 leading-relaxed">
            <span className="font-semibold">Reflexión final:</span> equilibrar innovación con responsabilidad requiere participación pública y mecanismos de rendición de cuentas. Auditorías de sesgo, comités de ética, tableros de riesgo y consulta a comunidades afectadas fortalecen legitimidad y reducen daños (UNESCO 2021; NIST 2023; OMS 2023; OCDE 2019).
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTSInteractionsSection;

