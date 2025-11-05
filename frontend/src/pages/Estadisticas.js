import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import AIStatsSection from '@/components/AIStatsSection';

export default function Estadisticas() {
  return (
    <>
      <Header />
      <PageContainer>
        <AIStatsSection />
      </PageContainer>
      <Footer />
    </>
  );
}

