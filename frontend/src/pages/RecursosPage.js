import React from 'react';
import Header from '@/components/Header';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';

export default function RecursosPage() {
  return (
    <>
      <Header />
      <PageContainer>
        <ResourcesSection />
      </PageContainer>
      <Footer />
    </>
  );
}

