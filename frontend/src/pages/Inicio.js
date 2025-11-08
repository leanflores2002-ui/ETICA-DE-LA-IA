import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import OpinionesSection from '@/components/OpinionesSection';

export default function Inicio() {
  return (
    <>
      <Header />
      <PageContainer>
        <HeroSection />
        <OpinionesSection />
      </PageContainer>
      <Footer />
    </>
  );
}

