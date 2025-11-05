import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import KeyTopicsSection from '@/components/KeyTopicsSection';
import SociedadSection from '@/components/SociedadSection';
import CTSInteractionsSection from '@/components/CTSInteractionsSection';
import AIStatsSection from '@/components/AIStatsSection';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';

export default function Temas() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Usar timeout corto para permitir pintar la página y luego hacer scroll
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    }
  }, [hash]);
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
