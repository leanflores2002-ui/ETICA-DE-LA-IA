// Opiniones y Reflexiones (JS puro)
(function(){
  const KEY = 'opiniones_v1';

  const $ = (sel) => document.querySelector(sel);
  const listEl = $('#comments');
  const emptyEl = $('#emptyState');
  const formEl = $('#commentForm');
  const nameEl = $('#name');
  const textEl = $('#text');

  const escape = (s) => String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');

  function load(){
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch { return []; }
  }

  function save(items){
    localStorage.setItem(KEY, JSON.stringify(items));
  }

  function format(ts){
    try {
      const d = new Date(ts);
      return new Intl.DateTimeFormat('es-AR', { dateStyle:'medium', timeStyle:'short' }).format(d);
    } catch {
      return ts;
    }
  }

  function render(items){
    listEl.innerHTML = '';
    if (!items.length){
      emptyEl.style.display = 'block';
      return;
    }
    emptyEl.style.display = 'none';
    for (const it of items){
      const el = document.createElement('article');
      el.className = 'comment';
      el.innerHTML = `
        <div class="meta"><strong>${escape(it.name)}</strong><time datetime="${escape(it.ts)}">${escape(format(it.ts))}</time></div>
        <p>${escape(it.text)}</p>
      `;
      // Insertar al final (debajo)
      listEl.appendChild(el);
    }
  }

  // Inicializar
  let state = load();
  render(state);

  formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = nameEl.value.trim();
    const text = textEl.value.trim();
    if (!name || !text) return;
    const item = { id: Date.now(), name, text, ts: new Date().toISOString() };
    state = [...state, item];
    save(state);
    // Renderizar solo el nuevo para evitar refrescar todo
    emptyEl.style.display = 'none';
    const el = document.createElement('article');
    el.className = 'comment';
    el.innerHTML = `
      <div class="meta"><strong>${escape(item.name)}</strong><time datetime="${escape(item.ts)}">${escape(format(item.ts))}</time></div>
      <p>${escape(item.text)}</p>
    `;
    listEl.appendChild(el);
    formEl.reset();
    nameEl.focus();
  });
})();
