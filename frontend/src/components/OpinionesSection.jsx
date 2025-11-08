import React, { useEffect, useMemo, useState } from 'react';

// Clave compartida con la versión estática para mantener comentarios existentes
const STORAGE_KEY = 'opiniones_v1';

const fmtDate = (ts) => {
  try {
    const d = new Date(ts);
    return new Intl.DateTimeFormat('es-AR', { dateStyle: 'medium', timeStyle: 'short' }).format(d);
  } catch {
    return ts;
  }
};

export default function OpinionesSection() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // no-op
    }
  }, [items]);

  const onSubmit = (e) => {
    e.preventDefault();
    const n = name.trim();
    const t = text.trim();
    if (!n || !t) return;
    const item = { id: Date.now(), name: n, text: t, ts: new Date().toISOString() };
    setItems((prev) => [...prev, item]);
    setText('');
  };

  const hasItems = items && items.length > 0;

  return (
    <section id="opiniones" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900" data-reveal>
            Opiniones y Reflexiones
          </h2>
          <p className="text-slate-600 mt-2" data-reveal style={{ transitionDelay: '80ms' }}>
            Compartí tus ideas sobre la ética de la IA. Los comentarios se guardan localmente en tu navegador.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 md:p-6">
            {hasItems ? (
              <div className="space-y-3">
                {items.map((it) => (
                  <article key={it.id} className="border border-slate-200 rounded-lg p-4 bg-white">
                    <div className="flex items-baseline gap-2 mb-1">
                      <strong className="text-slate-900">{it.name}</strong>
                      <time className="text-xs text-slate-500" dateTime={it.ts}>{fmtDate(it.ts)}</time>
                    </div>
                    <p className="whitespace-pre-wrap break-words text-slate-800">{it.text}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-slate-500">Aún no hay comentarios. ¡Sé la primera persona en opinar!</div>
            )}
          </div>

          <form onSubmit={onSubmit} className="border-t border-slate-200 p-4 md:p-6 grid gap-3">
            <div className="grid gap-2">
              <label htmlFor="opiniones-name" className="font-medium text-slate-800">Nombre</label>
              <input
                id="opiniones-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                required
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="opiniones-text" className="font-medium text-slate-800">Comentario</label>
              <textarea
                id="opiniones-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribí tu comentario"
                required
                className="w-full min-h-[110px] px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 resize-vertical"
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

