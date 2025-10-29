import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';

export default function Inicio() {
  return (
    <>
      <Header />
      <PageContainer>
        <HeroSection />
      </PageContainer>
      <Footer />
    </>
  );
}

