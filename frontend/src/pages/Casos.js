import React from 'react';
import Header from '@/components/Header';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';

export default function Casos() {
  return (
    <>
      <Header />
      <PageContainer>
        <CaseStudiesSection />
      </PageContainer>
      <Footer />
    </>
  );
}

