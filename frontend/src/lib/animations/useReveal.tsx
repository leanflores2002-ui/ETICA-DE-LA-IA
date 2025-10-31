import { useEffect, useRef, useState } from 'react';

/**
 * useReveal — Hook para revelar al entrar en viewport.
 * - Devuelve ref + estado inView + className a aplicar.
 * - Usa IntersectionObserver, respeta prefers-reduced-motion.
 */
export function useReveal(options?: { rootMargin?: string; threshold?: number; once?: boolean }) {
  const { rootMargin = '0px 0px -10% 0px', threshold = 0.15, once = true } = options || {};
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setInView(true); return; }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          if (once) io.unobserve(e.target);
        } else if (!once) {
          setInView(false);
        }
      });
    }, { rootMargin, threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, threshold, once]);

  const className = `reveal reveal-up ${inView ? 'is-inview' : ''}`.trim();
  return { ref, inView, className } as const;
}

export default useReveal;

