import React, { useEffect } from 'react';
import Header from '@/components/Header';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';

export default function RecursosPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <Header />
      <main id="recursos">
        <PageContainer>
          <ResourcesSection />
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}

