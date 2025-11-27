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
              Ética de la Inteligencia Artificial
            </h1>
            <p data-reveal className="reveal reveal-up text-xl text-slate-600 leading-relaxed" style={{ transitionDelay: '80ms' }}>
              Te invitamos a recorrer ideas clave sobre principios éticos, riesgos compartidos y responsabilidades en el desarrollo y uso de sistemas de inteligencia artificial en nuestras comunidades.
            </p>
            <div className="pt-4">
              <Link
                data-reveal
                to="/temas"
                className="reveal reveal-up tilt-3d inline-flex items-center space-x-2 bg-slate-900 text-white px-8 py-3 hover:bg-slate-800 transition-colors font-medium btn-anim border-gradient"
              >
                <span>Explorar temas</span>
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
