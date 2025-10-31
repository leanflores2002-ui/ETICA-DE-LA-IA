/*
  animations.js — Inicializador de animaciones (sin jQuery)
  - IntersectionObserver para reveals, SVG draw y counters
  - Tilt 3D (mousemove), Parallax suave (scroll), Sticky CTA
  - Respeta prefers-reduced-motion
  - API: initAnimations({ once, stagger, observeRoot })
*/

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Util: throttle por frame */
const rafThrottle = (fn) => {
  let ticking = false;
  return (...args) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        fn(...args);
        ticking = false;
      });
      ticking = true;
    }
  };
};

/** Reveal con IntersectionObserver: elementos con [data-reveal] */
function setupReveal({ once = true, stagger = 40, root = null } = {}) {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return () => {};
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('is-inview');
          if (el.hasAttribute('data-stagger')) {
            const children = Array.from(el.children);
            children.forEach((child, i) => child.style.setProperty('--index', String(i)));
            el.style.setProperty('--stagger', `${el.getAttribute('data-stagger') || stagger}ms`);
          }
          if (once) io.unobserve(el);
        } else if (!once) {
          el.classList.remove('is-inview');
        }
      });
    },
    { root, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  document.querySelectorAll('[data-stagger]').forEach((el) => io.observe(el));

  return () => io.disconnect();
}

/** Contadores: elementos con [data-counter][data-counter-to] */
function setupCounters() {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return () => {};
  const reduce = prefersReducedMotion();
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const animateCount = (el) => {
    const to = Number(el.getAttribute('data-counter-to') || '0');
    const duration = Number(el.getAttribute('data-counter-duration') || (reduce ? 0 : 1600));
    const from = Number(el.getAttribute('data-counter-from') || '0');
    const formatter = new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 });
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const v = from + (to - from) * easeOut(t);
      el.textContent = formatter.format(duration === 0 ? to : v);
      if (t < 1 && duration > 0) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && animateCount(e.target)),
    { threshold: 0.5 }
  );
  document.querySelectorAll('[data-counter][data-counter-to]').forEach((el) => io.observe(el));
  return () => io.disconnect();
}

/** Tilt 3D: elementos con [data-tilt] estructura .tilt-3d > .tilt-3d__inner */
function setupTilt() {
  if (prefersReducedMotion()) return () => {};
  const els = document.querySelectorAll('[data-tilt]');
  els.forEach((root) => {
    const inner = root.querySelector('.tilt-3d__inner') || root;
    root.setAttribute('data-tilt-active', 'true');
    const onMove = rafThrottle((e) => {
      const rect = root.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - y) * 12; // 12deg rango total
      const ry = (x - 0.5) * 12;
      inner.style.setProperty('--rx', `${rx}deg`);
      inner.style.setProperty('--ry', `${ry}deg`);
    });
    const onLeave = () => {
      inner.style.setProperty('--rx', `0deg`);
      inner.style.setProperty('--ry', `0deg`);
    };
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerleave', onLeave);
  });
  return () => {
    els.forEach((root) => {
      root.removeAttribute('data-tilt-active');
    });
  };
}

/** Parallax suave: elementos con [data-parallax][data-parallax-speed] */
function setupParallax() {
  if (prefersReducedMotion()) return () => {};
  const els = Array.from(document.querySelectorAll('[data-parallax]'));
  if (!els.length) return () => {};
  const onScroll = rafThrottle(() => {
    const vh = window.innerHeight;
    els.forEach((el) => {
      const speed = Number(el.getAttribute('data-parallax-speed') || '0.15');
      const rect = el.getBoundingClientRect();
      const middle = rect.top + rect.height / 2;
      const delta = (middle - vh / 2) / vh; // -1..1
      const ty = -delta * (speed * 100);
      el.style.transform = `translate3d(0, ${ty.toFixed(2)}px, 0)`;
    });
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

/** Sticky CTA visible al 60% del scroll: [data-sticky-cta] */
function setupStickyCTA() {
  const el = document.querySelector('[data-sticky-cta]');
  if (!el) return () => {};
  const onScroll = rafThrottle(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const progress = scrollTop / (scrollHeight - clientHeight || 1);
    if (progress > 0.6) el.classList.add('is-visible');
    else el.classList.remove('is-visible');
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener('scroll', onScroll);
}

/** SVG draw: elementos con .svg-draw */
function setupSvgDraw() {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return () => {};
  const calcDash = (el) => {
    try {
      const len = el.getTotalLength?.() ?? 0;
      el.style.setProperty('--dash', String(len));
    } catch {}
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-drawn');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.svg-draw').forEach((svg) => {
    svg.querySelectorAll('path, line, polyline, polygon, circle, rect').forEach(calcDash);
    io.observe(svg);
  });
  return () => io.disconnect();
}

/** API principal */
export function initAnimations(options = {}) {
  const cleanups = [];
  cleanups.push(setupReveal(options));
  cleanups.push(setupCounters());
  cleanups.push(setupTilt());
  cleanups.push(setupParallax());
  cleanups.push(setupStickyCTA());
  cleanups.push(setupSvgDraw());
  return () => cleanups.forEach((fn) => { try { fn && fn(); } catch {} });
}

// Opcional: GSAP + ScrollTrigger (si lo instalas)
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// export function initGSAP() {
//   gsap.utils.toArray('[data-reveal="up"]').forEach((el) => {
//     gsap.from(el, { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } });
//   });
// }

