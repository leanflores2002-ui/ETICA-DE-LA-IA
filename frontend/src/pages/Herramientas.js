import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Globe, Wrench, ShieldCheck } from 'lucide-react';

export default function Herramientas() {
  return (
    <>
      <Header />
      <PageContainer>
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">🧰 Herramientas</h1>
              <p className="text-slate-600 text-lg mt-4">Utilidades y kits para evaluar sesgo, explicabilidad y cumplimiento.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4" data-stagger>
              <Card className="reveal reveal-up border-slate-200" data-reveal>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-slate-900">AI Fairness 360</CardTitle>
                      <CardDescription className="text-slate-600">IBM • Biblioteca para detectar y mitigar sesgos</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="https://github.com/IBM/AIF360" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">Sitio oficial →</a>
                </CardContent>
              </Card>

              <Card className="reveal reveal-up border-slate-200" data-reveal>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-slate-900">What‑If Tool</CardTitle>
                      <CardDescription className="text-slate-600">Google • Exploración interactiva de modelos</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="https://pair-code.github.io/what-if-tool/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">Sitio oficial →</a>
                </CardContent>
              </Card>

              <Card className="reveal reveal-up border-slate-200 md:col-span-2" data-reveal>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-slate-900">Fairlearn</CardTitle>
                      <CardDescription className="text-slate-600">Microsoft • Evaluación y mitigación de inequidades</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="https://fairlearn.org/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">Sitio oficial →</a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </PageContainer>
      <Footer />
    </>
  );
}
