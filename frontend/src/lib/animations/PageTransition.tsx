import React, { useEffect, useRef } from 'react';

/**
 * PageTransition — transición corta (fade+blur) para cambio de ruta.
 * Uso: envuelve el contenido de cada página o el `Outlet`/`Routes`.
 * No requiere dependencias. Alternativa con Framer Motion: PageTransition.fm.tsx
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('page-enter');
    // fuerza reflow para la transición
    void el.offsetHeight; 
    el.classList.add('page-enter-active');
    const finish = () => {
      el.classList.remove('page-enter', 'page-enter-active');
    };
    const t = window.setTimeout(finish, 380);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}

export default PageTransition;

