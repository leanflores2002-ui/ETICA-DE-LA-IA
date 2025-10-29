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
    <section className="pt-24 pb-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Ética de la Inteligencia Artificial
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Explorando los principios fundamentales, desafíos y responsabilidades en el desarrollo y aplicación de sistemas de inteligencia artificial en la sociedad moderna.
            </p>
            <div className="pt-4">
              <button
                onClick={scrollToTopics}
                className="inline-flex items-center space-x-2 bg-slate-900 text-white px-8 py-3 hover:bg-slate-800 transition-colors font-medium"
              >
                <span>Explorar Temas</span>
                <ArrowDown size={20} />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1717501220725-83f151c447e7"
              alt="Visualización de Inteligencia Artificial"
              className="w-full h-[400px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
