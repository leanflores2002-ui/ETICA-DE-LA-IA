import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from './ui/table';

const AIStatsSection = () => {
  return (
    <section id="estadisticas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal className="reveal reveal-up text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Estadísticas sobre el uso de la IA (2023–2025)
          </h2>
          <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
            Panorama reciente de adopción, efectos en empleo y productividad, educación, salud, hogares y percepción social, con referencias institucionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Empresas</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                El Stanford AI Index 2024 reporta una rápida expansión de la IA generativa en 2023–2024 y un aumento de adopción en áreas como servicio al cliente, marketing y desarrollo de software. La OCDE (2023) observa mayor adopción en grandes empresas que en pymes.
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
                WEF (Future of Jobs 2023): ~83M puestos desplazados y ~69M creados a 2027; ~44% de habilidades afectadas. Evidencia experimental (MIT, 2023) muestra ≈14% de mejora promedio en tareas de redacción con IA generativa, mayor para perfiles menos experimentados. OIT (2023): alta exposición en tareas administrativas.
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
                UNESCO (2023) registra una adopción creciente de IA generativa en entornos educativos y recomienda marcos institucionales claros para integridad académica, evaluación y protección de datos.
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
                La OMS (2023) recoge expansión de pilotos de IA en diagnóstico e imagen médica, con énfasis en validación clínica, calidad de datos y vigilancia posdespliegue.
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
                La UIT (2023) estima ~67% de la población mundial conectada y 2.6 mil millones de personas sin conexión, limitando la participación equitativa en beneficios de la IA.
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
                Encuestas de Pew Research (2023–2024) indican que, en EE. UU., predomina la preocupación sobre el entusiasmo por la IA, especialmente en usos de alto impacto como salud, vigilancia y trabajo.
              </p>
              <p className="text-sm text-slate-500">Fuente: Pew Research Center 2023–2024.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6" data-reveal>
            Cifras clave (cards comparativas)
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
                <div className="text-3xl font-bold text-slate-900">≈ 2.6 mil millones</div>
                <p className="text-slate-600">Personas sin acceso a Internet</p>
                <div className="mt-3">
                  <Progress value={33} aria-label="Población sin conexión (aprox.)" />
                </div>
              </CardContent>
            </Card>

            <Card data-reveal className="reveal reveal-up">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-500">Empleo (WEF 2023, 2023–2027)</CardTitle>
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
                    <div className="flex-1"><Progress value={100} aria-label="83 millones desplazados (escala comparativa)" /></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs w-16 text-slate-600">Cread.</span>
                    <div className="flex-1"><Progress value={Math.round((69/83)*100)} aria-label="69 millones creados (comparado con 83M)" /></div>
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
                    <TableCell>≈ 2.6 mil millones</TableCell>
                    <TableCell>UIT</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Empleo</TableCell>
                    <TableCell>Desplazados (2023–2027)</TableCell>
                    <TableCell>≈ 83M</TableCell>
                    <TableCell>WEF</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Empleo</TableCell>
                    <TableCell>Creados (2023–2027)</TableCell>
                    <TableCell>≈ 69M</TableCell>
                    <TableCell>WEF</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Habilidades</TableCell>
                    <TableCell>Habilidades afectadas</TableCell>
                    <TableCell>≈ 44%</TableCell>
                    <TableCell>WEF</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Productividad</TableCell>
                    <TableCell>Mejora promedio (redacción)</TableCell>
                    <TableCell>≈ 14%</TableCell>
                    <TableCell>MIT (Noy & Zhang)</TableCell>
                    <TableCell>2023</TableCell>
                  </TableRow>
                </TableBody>
                <TableCaption>
                  Comparaciones ilustrativas; ver informes originales para detalles metodológicos y definiciones.
                </TableCaption>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-sm text-slate-500">
          <p className="font-semibold">Nota metodológica</p>
          <p>
            Las cifras varían por país y sector. Consultar informes originales (UNESCO, OCDE, NIST, OMS, Stanford, UIT, WEF, OIT, Pew) para definiciones, muestras y márgenes de error.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIStatsSection;
