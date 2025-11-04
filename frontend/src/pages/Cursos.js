import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';

export default function Cursos() {
  return (
    <>
      <Header />
      <PageContainer>
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Cursos</h1>
              <p className="text-slate-600 text-lg mt-4">Formación y materiales de aprendizaje sobre ética de IA.</p>
            </div>
          </div>
        </section>
      </PageContainer>
      <Footer />
    </>
  );
}

