import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import KeyTopicsSection from '../components/KeyTopicsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ResourcesSection from '../components/ResourcesSection';
import Footer from '../components/Footer';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('theme-ethics');
    const el = containerRef.current;
    if (!el) return;

    const slides = Array.from(el.querySelectorAll('.presentation-slide'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { root: el, threshold: 0.25 }
    );
    slides.forEach((s) => io.observe(s));

    return () => {
      io.disconnect();
      document.body.classList.remove('theme-ethics');
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="presentation-container"
    >
      <section className="presentation-slide">
        <Header />
        <HeroSection />
      </section>
      <section className="presentation-slide">
        <KeyTopicsSection />
      </section>
      <section className="presentation-slide">
        <CaseStudiesSection />
      </section>
      <section className="presentation-slide">
        <ResourcesSection />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
