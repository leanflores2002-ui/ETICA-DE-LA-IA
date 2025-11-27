import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from './ui/table';

// Pequeño componente de gráfico en SVG (sin dependencias)
function MarketGrowthChart() {
  const data = [
    { year: 2020, value: 14 },
    { year: 2021, value: 23 },
    { year: 2022, value: 40 },
    { year: 2023, value: 67 },
    { year: 2024, value: 137, projected: true },
    { year: 2025, value: 217, projected: true },
    { year: 2026, value: 304, projected: true },
    { year: 2027, value: 399, projected: true },
    { year: 2028, value: 548, projected: true },
    { year: 2029, value: 728, projected: true },
    { year: 2030, value: 897, projected: true },
    { year: 2031, value: 1079, projected: true },
    { year: 2032, value: 1304, projected: true },
  ];

  const svgW = 900;
  const svgH = 360;
  const margin = { top: 24, right: 28, bottom: 56, left: 64 };
  const innerW = svgW - margin.left - margin.right;
  const innerH = svgH - margin.top - margin.bottom;
  const maxVal = Math.max(...data.map((d) => d.value)) * 1.1; // pequeño margen superior

  const xStep = innerW / data.length;
  const barW = Math.min(34, xStep * 0.62);
  const xCenter = (i) => margin.left + i * xStep + xStep / 2;
  const yScale = (v) => margin.top + innerH * (1 - v / maxVal);

  // Ticks a intervalos fijos para la rejilla
  const tickStep = 250;
  const ticks = [];
  for (let v = 0; v <= Math.ceil(maxVal / tickStep) * tickStep; v += tickStep) ticks.push(v);

  // Calcular CAGR aproximado para la anotación de tendencia
  const start = data[0].value;
  const end = data[data.length - 1].value;
  const years = data.length - 1;
  const cagr = Math.pow(end / start, 1 / years) - 1;
  const cagrLabel = `~${Math.round(cagr * 100)}%`;

  return (
    <figure className="w-full">
      <svg viewBox={`0 0 ${svgW} ${svgH}`} role="img" aria-label="Crecimiento del mercado de IA generativa en miles de millones de USD">
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L8,4 L0,8 Z" fill="#6d28d9" />
          </marker>
          <linearGradient id="barGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        {/* Rejilla horizontal */}
        {ticks.map((t, i) => (
          <g key={`g-${i}`}>
            <line x1={margin.left} x2={margin.left + innerW} y1={yScale(t)} y2={yScale(t)} stroke="#e2e8f0" strokeWidth="1" opacity={t === 0 ? 1 : 0.6} />
            <text x={margin.left - 10} y={yScale(t)} textAnchor="end" alignmentBaseline="middle" fontSize="11" fill="#475569">
              {t}
            </text>
          </g>
        ))}

        {/* Etiqueta eje Y */}
        <text x={16} y={margin.top} transform={`rotate(-90 16 ${margin.top})`} textAnchor="end" fontSize="12" fill="#334155">
          En miles de millones, USD
        </text>

        {/* Barras */}
        {data.map((d, i) => {
          const x = xCenter(i) - barW / 2;
          const y = yScale(d.value);
          const h = margin.top + innerH - y;
          const fill = d.projected ? 'url(#barGradient)' : '#6366f1';
          const opacity = d.projected ? 0.95 : 0.9;
          return (
            <g key={d.year}>
              <rect x={x} y={y} width={barW} height={h} fill={fill} opacity={opacity} rx="6" />
              <text x={x + barW / 2} y={y - 6} textAnchor="middle" fontSize="11" fill="#334155">
                {d.value}
              </text>
              <text x={x + barW / 2} y={margin.top + innerH + 18} textAnchor="middle" fontSize="11" fill="#475569">
                {d.year}
                {d.projected ? '*' : ''}
              </text>
            </g>
          );
        })}

        {/* Anotación de tendencia */}
        {(() => {
          const x1 = xCenter(0);
          const y1 = yScale(data[0].value);
          const x2 = xCenter(data.length - 1);
          const y2 = yScale(data[data.length - 1].value);
          const xm = (x1 + x2) / 2;
          const ym = (y1 + y2) / 2 - 8;
          return (
            <g>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6d28d9" strokeWidth="3" markerEnd="url(#arrowhead)" opacity="0.9" />
              <text x={xm} y={ym} textAnchor="middle" fontSize="18" fill="#6d28d9" fontWeight="600">
                {cagrLabel}
              </text>
            </g>
          );
        })()}
      </svg>
      <figcaption className="text-center text-sm text-slate-500 mt-2">
        Crecimiento del mercado de IA generativa (valores estimados marcados con *).
      </figcaption>
    </figure>
  );
}

const AIStatsSection = () => {
  return (
    <section id="estadisticas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal className="reveal reveal-up text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Indicadores para implementar la Recomendación UNESCO (2023-2025)
          </h2>
          <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
            Datos recientes que sirven para planificar políticas de derechos humanos, inclusión, transparencia, rendición de cuentas, sostenibilidad y gobernanza de riesgos en IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Empresas</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                La Recomendación UNESCO pide evaluaciones de impacto en derechos, gobernanza de datos y trazabilidad. Informes 2023-2024 muestran mayor adopción de IA generativa en grandes empresas que en pymes; se recomienda incorporar comités de ética, registros de modelos y supervisión humana en dominios sensibles.
              </p>
              <p className="text-sm text-slate-500">Fuentes: Stanford AI Index 2024; OCDE 2023.</p>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Empleo y productividad</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                Bajo el enfoque UNESCO, la automatización debe acompañarse de reconversión justa, protección social y participación laboral. Proyecciones 2023-2027 estiman recomposición de puestos y 44% de habilidades en evolución; la productividad mejora cuando se guía por principios de equidad y transparencia.
              </p>
              <p className="text-sm text-slate-500">Fuentes: WEF 2023; Noy & Zhang (MIT, 2023); OIT 2023.</p>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Educación</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                La UNESCO advierte que la IA en educación requiere integridad académica, protección de datos y accesibilidad. La adopción de herramientas generativas crece; las instituciones deben definir usos permitidos, atribución clara y acompañamiento docente para no profundizar brechas.
              </p>
              <p className="text-sm text-slate-500">Fuente: UNESCO 2023.</p>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Salud</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                OMS y UNESCO coinciden en validar clínicamente los sistemas, asegurar supervisión humana y explicabilidad antes y después del despliegue. La prioridad es proteger seguridad del paciente, calidad de datos y transparencia sobre límites y sesgos.
              </p>
              <p className="text-sm text-slate-500">Fuente: OMS 2023.</p>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Hogares y brecha digital</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                “No dejar a nadie atrás” guía la Recomendación. Con 67% de la población conectada y 2,6 mil millones sin acceso (UIT 2023), las políticas de IA deben contemplar conectividad, accesibilidad lingüística y protección de grupos vulnerables.
              </p>
              <p className="text-sm text-slate-500">Fuente: UIT 2023.</p>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Percepción social</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                La confianza pública depende de transparencia, control humano significativo y reparación cuando hay daño. Encuestas 2023-2024 muestran preocupación por usos de alto impacto; el marco UNESCO orienta a documentar riesgos, explicar decisiones y habilitar reclamos.
              </p>
              <p className="text-sm text-slate-500">Fuente: Pew Research Center 2023-2024.</p>
            </CardContent>
          </Card>
        </div>

        {/* Gráfico: crecimiento del mercado de IA generativa */}
        <div className="mt-14">
          <Card data-reveal className="reveal reveal-up">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-serif">Crecimiento del mercado de IA generativa</CardTitle>
            </CardHeader>
            <CardContent>
              <MarketGrowthChart />
            </CardContent>
          </Card>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6" data-reveal>
            Cifras clave para gobernanza basada en riesgo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
            <Card data-reveal className="reveal reveal-up">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-500">Conectividad global (UIT 2023)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-slate-900">67%</div>
                <p className="text-slate-600">Población conectada a Internet</p>
                <div className="mt-3">
                  <Progress value={67} aria-label="Población conectada" />
                </div>
              </CardContent>
            </Card>

            <Card data-reveal className="reveal reveal-up">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-500">Personas sin conexión (UIT 2023)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900">~ 2.6 mil millones</div>
                <p className="text-slate-600">Personas sin acceso a Internet</p>
                <div className="mt-3">
                  <Progress value={33} aria-label="Población sin conexión (aprox.)" />
                </div>
              </CardContent>
            </Card>

            <Card data-reveal className="reveal reveal-up">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-500">Empleo (WEF 2023, 2023-2027)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-4">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">83M</div>
                    <p className="text-slate-600 text-sm">Desplazados</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">69M</div>
                    <p className="text-slate-600 text-sm">Creados</p>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs w-16 text-slate-600">Despl.</span>
                    <div className="flex-1">
                      <Progress value={100} aria-label="83 millones desplazados (escala comparativa)" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs w-16 text-slate-600">Cread.</span>
                    <div className="flex-1">
                      <Progress value={Math.round((69 / 83) * 100)} aria-label="69 millones creados (comparado con 83M)" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-reveal className="reveal reveal-up">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-500">Habilidades y productividad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-700 text-sm">Habilidades afectadas (WEF 2023)</p>
                    <span className="font-semibold">44%</span>
                  </div>
                  <Progress value={44} aria-label="44% habilidades afectadas" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-700 text-sm">Productividad (MIT 2023)</p>
                    <span className="font-semibold">14%</span>
                  </div>
                  <Progress value={14} aria-label="14% mejora productividad" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6" data-reveal>
            Tabla resumen de indicadores
          </h3>
          <Card data-reveal className="reveal reveal-up">
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dominio</TableHead>
                    <TableHead>Indicador</TableHead>
                    <TableHead>Cifra</TableHead>
                    <TableHead>Fuente</TableHead>
                    <TableHead>Año</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Conectividad</TableCell>
                    <TableCell>Población conectada</TableCell>
                    <TableCell>67%</TableCell>
                    <TableCell>UIT</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Brecha</TableCell>
                    <TableCell>Personas sin conexión</TableCell>
                    <TableCell>~ 2.6 mil millones</TableCell>
                    <TableCell>UIT</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Empleo</TableCell>
                    <TableCell>Desplazados (2023-2027)</TableCell>
                    <TableCell>~ 83M</TableCell>
                    <TableCell>WEF</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Empleo</TableCell>
                    <TableCell>Creados (2023-2027)</TableCell>
                    <TableCell>~ 69M</TableCell>
                    <TableCell>WEF</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Habilidades</TableCell>
                    <TableCell>Habilidades afectadas</TableCell>
                    <TableCell>~ 44%</TableCell>
                    <TableCell>WEF</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Productividad</TableCell>
                    <TableCell>Mejora promedio (redacción)</TableCell>
                    <TableCell>~ 14%</TableCell>
                    <TableCell>MIT (Noy & Zhang)</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                </TableBody>
                <TableCaption>
                  Cifras ilustrativas para planificar gobernanza de riesgo y derechos; revisar fuentes para definiciones y métodos.
                </TableCaption>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-sm text-slate-500">
          <p className="font-semibold">Nota metodológica</p>
          <p>
            Las cifras varían por país y sector. Usar siempre las fuentes originales (UNESCO, OCDE, NIST, OMS, Stanford, UIT, WEF, OIT, Pew) para definir riesgos, mitigar sesgos y diseñar salvaguardas según la Recomendación UNESCO.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIStatsSection;
