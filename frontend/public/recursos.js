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
    const triggers = qsa('.tabs-trigger');
    const panes = qsa('.tab-pane');
    function showTab(id) {
      panes.forEach(p => p.hidden = p.id !== id);
      triggers.forEach(t => t.setAttribute('data-active', t.getAttribute('data-tab') === id ? 'true' : 'false'));
      requestAnimationFrame(() => initReveal({ once: false, stagger: 48 }));
    }
    triggers.forEach(btn => btn.addEventListener('click', () => showTab(btn.getAttribute('data-tab'))));
    // hash navigation
    const hash = location.hash.replace('#','');
    const initial = ['papers','organizations','frameworks','tools','courses','books'].includes(hash) ? hash : 'papers';
    showTab(initial);
    // click shortcuts in hero cards
    qsa('[data-tab-target]').forEach(a => a.addEventListener('click', (e) => {
      const target = a.getAttribute('href').replace('#','');
      if (['tools','courses'].includes(target)) {
        e.preventDefault();
        showTab(target);
        history.replaceState(null,'',`#${target}`);
        window.scrollTo({ top: qs('#tab-contents').offsetTop - 24, behavior: 'smooth' });
      }
    }));
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

