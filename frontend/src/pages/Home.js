import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import KeyTopicsSection from '../components/KeyTopicsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ResourcesSection from '../components/ResourcesSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <KeyTopicsSection />
      <CaseStudiesSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Home;