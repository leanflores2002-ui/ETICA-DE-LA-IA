import React, { useEffect, useRef } from 'react';
import { initAnimations } from '@/lib/animations/animations';

export default function PageContainer({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    document.body.classList.add('theme-ethics');
    const el = ref.current;
    if (el) {
      requestAnimationFrame(() => el.classList.add('page-in'));
    }
    // Re-inicializa animaciones de reveal/parallax al montar cada página
    const cleanupAnimations = initAnimations({ once: true, stagger: 48 });
    return () => {
      document.body.classList.remove('theme-ethics');
      if (typeof cleanupAnimations === 'function') cleanupAnimations();
    };
  }, []);
  return (
    <div ref={ref} className="page">
      <div className="slide-content glass-strong">
        {children}
      </div>
    </div>
  );
}

