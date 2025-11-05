(() => {
  const qs = (s, r = document) => r.querySelector(s);
  const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

  function initReveal({ once = false, stagger = 48 } = {}) {
    if (!('IntersectionObserver' in window)) return () => {};
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-inview');
          if (once) io.unobserve(e.target);
        } else if (!once) {
          e.target.classList.remove('is-inview');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    qsa('[data-stagger], .reveal').forEach((el, idx) => {
      el.style.setProperty('--index', String(idx));
      io.observe(el);
    });
    return () => io.disconnect();
  }

  function initTabs() {
    const allowed = ['papers', 'organizations', 'books'];
    const triggers = qsa('.tabs-trigger');
    const panes = qsa('.tab-pane');
    // Oculta triggers y paneles no permitidos
    triggers.forEach(t => {
      const tab = t.getAttribute('data-tab');
      if (!allowed.includes(tab)) t.style.display = 'none';
    });
    panes.forEach(p => { if (!allowed.includes(p.id)) p.remove(); });

    function showTab(id) {
      panes.forEach(p => { if (allowed.includes(p.id)) p.hidden = p.id !== id; });
      triggers.forEach(t => t.setAttribute('data-active', t.getAttribute('data-tab') === id ? 'true' : 'false'));
      requestAnimationFrame(() => initReveal({ once: false, stagger: 48 }));
    }
    triggers.forEach(btn => {
      const tab = btn.getAttribute('data-tab');
      if (allowed.includes(tab)) btn.addEventListener('click', () => showTab(tab));
    });
    // hash navigation
    const hash = location.hash.replace('#','');
    const initial = allowed.includes(hash) ? hash : 'papers';
    showTab(initial);
  }

  // Reactive background light
  window.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--mx', `${(e.clientX / window.innerWidth) * 100}%`);
    document.body.style.setProperty('--my', `${(e.clientY / window.innerHeight) * 100}%`);
  });

  document.addEventListener('DOMContentLoaded', () => {
    initReveal({ once: false, stagger: 48 });
    initTabs();
  });
})();

