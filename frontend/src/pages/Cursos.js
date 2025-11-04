import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function Cursos() {
  return (
    <>
      <Header />
      <PageContainer>
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">🎓 Cursos</h1>
              <p className="text-slate-600 text-lg mt-4">Formación recomendada en ética y responsabilidad en IA.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4" data-stagger>
              <Card className="reveal reveal-up border-slate-200" data-reveal>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-slate-900">Ethics of AI</CardTitle>
                      <CardDescription className="text-slate-600">Harvard University • Universitario</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="https://online.hbs.edu/courses/ethics-of-ai/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">Ver curso →</a>
                </CardContent>
              </Card>

              <Card className="reveal reveal-up border-slate-200" data-reveal>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-serif text-slate-900">AI For Everyone</CardTitle>
                      <CardDescription className="text-slate-600">DeepLearning.AI (Coursera) • Introductorio</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="https://www.coursera.org/learn/ai-for-everyone" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">Ver curso →</a>
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
