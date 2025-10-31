import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToTopics = () => {
    const element = document.getElementById('temas-claves');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-24 pb-16 hero--animated anim-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 data-reveal className="reveal reveal-up text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Ética de la Inteligencia Artificial
            </h1>
            <p data-reveal className="reveal reveal-up text-xl text-slate-600 leading-relaxed" style={{ transitionDelay: '80ms' }}>
              Explorando los principios fundamentales, desafíos y responsabilidades en el desarrollo y aplicación de sistemas de inteligencia artificial en la sociedad moderna.
            </p>
            <div className="pt-4">
              <button data-reveal
                onClick={scrollToTopics}
                className="reveal reveal-up tilt-3d inline-flex items-center space-x-2 bg-slate-900 text-white px-8 py-3 hover:bg-slate-800 transition-colors font-medium btn-anim border-gradient"
              >
                <span>Explorar Temas</span>
                <ArrowDown size={20} />
              </button>
            </div>
          </div>
          <div className="relative">
            <img data-parallax data-parallax-speed="0.18"
              src="https://images.unsplash.com/photo-1717501220725-83f151c447e7"
              alt="Visualización de Inteligencia Artificial"
              className="w-full h-[400px] object-cover shadow-lg will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
