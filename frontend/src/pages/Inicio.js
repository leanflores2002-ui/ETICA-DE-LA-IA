import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import KeyTopicsSection from '@/components/KeyTopicsSection';
import StatusDemo from '@/components/StatusDemo';

export default function Inicio() {
  return (
    <>
      <Header />
      <PageContainer>
        <HeroSection />
        <KeyTopicsSection />
        <StatusDemo />
      </PageContainer>
      <Footer />
    </>
  );
}

