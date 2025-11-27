import React from 'react';
import SafeImage from './SafeImage';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 hero--animated anim-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 data-reveal className="reveal reveal-up text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Ética de la Inteligencia Artificial con enfoque UNESCO
            </h1>
            <p data-reveal className="reveal reveal-up text-xl text-slate-600 leading-relaxed" style={{ transitionDelay: '80ms' }}>
              Exploramos la “Recomendación sobre la Ética de la Inteligencia Artificial” de la UNESCO (SHS/BIO/PI/2021/1) para aplicar derechos humanos, inclusión, supervisión humana y transparencia en todo el ciclo de vida de la IA. Aquí encontrarás guías prácticas, casos y recursos para desarrollar y usar IA con responsabilidad pública.
            </p>
            <div className="pt-4">
              <Link
                data-reveal
                to="/temas"
                className="reveal reveal-up tilt-3d inline-flex items-center space-x-2 bg-slate-900 text-white px-8 py-3 hover:bg-slate-800 transition-colors font-medium btn-anim border-gradient"
              >
                <span>Explorar temas UNESCO</span>
                <ArrowDown size={20} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <SafeImage
              data-parallax
              data-parallax-speed="0.18"
              src="/img/hero-inicio.jpg"
              alt="Rostro humano con composiciones tecnológicas y escenas de IA"
              className="w-full h-[400px] object-cover shadow-lg will-change-transform"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
