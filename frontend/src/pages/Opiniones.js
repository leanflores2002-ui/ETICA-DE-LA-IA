import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import OpinionesSection from '@/components/OpinionesSection';

export default function Opiniones() {
  return (
    <>
      <Header />
      <PageContainer>
        <OpinionesSection />
      </PageContainer>
      <Footer />
    </>
  );
}

