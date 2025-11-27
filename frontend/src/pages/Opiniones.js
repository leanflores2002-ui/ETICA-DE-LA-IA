import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageContainer from '@/components/PageContainer';
import OpinionesSection from '@/components/OpinionesSection';

export default function Opiniones() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <Header />
      <main id="opiniones">
        <PageContainer>
          <OpinionesSection />
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
