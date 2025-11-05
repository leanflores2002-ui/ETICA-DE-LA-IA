import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import CTSInteractionsSection from '@/components/CTSInteractionsSection';

export default function InteraccionesCTS() {
  return (
    <>
      <Header />
      <PageContainer>
        <CTSInteractionsSection />
      </PageContainer>
      <Footer />
    </>
  );
}

