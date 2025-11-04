import React from 'react';
import { BookOpen, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navegación',
      links: [
        { label: 'Inicio', to: '/' },
        { label: 'Temas Claves', to: '/temas' },
        { label: 'Casos de Estudio', to: '/casos' },
        { label: 'Recursos', external: true, url: '/recursos.html' }
      ]
    },
    {
      title: 'Organizaciones Clave',
      links: [
        { label: 'Partnership on AI', external: true, url: 'https://www.partnershiponai.org/' },
        { label: 'AI Now Institute', external: true, url: 'https://ainowinstitute.org/' },
        { label: 'Future of Humanity Institute', external: true, url: 'https://www.fhi.ox.ac.uk/' },
        { label: 'Montreal AI Ethics Institute', external: true, url: 'https://montrealethics.ai/' }
      ]
    },
    {
      title: 'Marcos Regulatorios',
      links: [
        { label: 'GDPR (UE)', external: true, url: 'https://gdpr.eu/' },
        { label: 'AI Act (UE)', external: true, url: 'https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence' },
        { label: 'OECD AI Principles', external: true, url: 'https://oecd.ai/en/ai-principles' },
        { label: 'Beijing AI Principles', external: true, url: 'https://www.baai.ac.cn/blog/beijing-ai-principles' }
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-6 h-6 text-slate-100" />
              <h3 className="text-xl font-serif font-bold text-slate-100">Ética de IA</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Un recurso educativo dedicado a explorar los principios fundamentales y desafíos éticos en el desarrollo de la inteligencia artificial.
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-slate-100 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-100 transition-colors flex items-center space-x-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-slate-400 hover:text-slate-100 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Ética de IA. Recurso educativo sobre inteligencia artificial ética.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:contacto@ejemplo.com"
                className="text-slate-400 hover:text-slate-100 transition-colors flex items-center space-x-2"
              >
                <Mail size={16} />
                <span className="text-sm">Contacto</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
