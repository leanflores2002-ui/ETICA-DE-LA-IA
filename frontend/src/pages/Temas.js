import React from 'react';
import Header from '@/components/Header';
import KeyTopicsSection from '@/components/KeyTopicsSection';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';

export default function Temas() {
  return (
    <>
      <Header />
      <PageContainer>
        <KeyTopicsSection />
      </PageContainer>
      <Footer />
    </>
  );
}

