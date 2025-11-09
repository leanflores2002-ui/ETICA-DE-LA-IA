import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import ImpactosSocialesSection from '@/components/ImpactosSocialesSection';

export default function Impactos() {
  return (
    <>
      <Header />
      <PageContainer>
        <ImpactosSocialesSection />
      </PageContainer>
      <Footer />
    </>
  );
}

