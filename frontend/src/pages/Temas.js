import React from 'react';
import Header from '@/components/Header';
import KeyTopicsSection from '@/components/KeyTopicsSection';
import SociedadSection from '@/components/SociedadSection';
import CTSInteractionsSection from '@/components/CTSInteractionsSection';
import AIStatsSection from '@/components/AIStatsSection';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';

export default function Temas() {
  return (
    <>
      <Header />
      <PageContainer>
        <KeyTopicsSection />
        <SociedadSection />
        <CTSInteractionsSection />
        <AIStatsSection />
      </PageContainer>
      <Footer />
    </>
  );
}
