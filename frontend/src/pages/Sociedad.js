import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import SociedadSection from '@/components/SociedadSection';

export default function Sociedad() {
  return (
    <>
      <Header />
      <PageContainer>
        <SociedadSection />
      </PageContainer>
      <Footer />
    </>
  );
}

