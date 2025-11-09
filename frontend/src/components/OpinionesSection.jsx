import React, { useEffect, useMemo, useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';

// Clave para persistir en localStorage
const STORAGE_KEY = 'opiniones_v1';

const fmtDate = (ts) => {
  try {
    const d = new Date(ts);
    return new Intl.DateTimeFormat('es-AR', { dateStyle: 'medium', timeStyle: 'short' }).format(d);
  } catch {
    return ts;
  }
};

const fmtRelative = (ts) => {
  try {
    const d = new Date(ts);
    const now = new Date();
    const diff = (d.getTime() - now.getTime()) / 1000; // seconds
    const rtf = new Intl.RelativeTimeFormat('es-AR', { numeric: 'auto' });
    const abs = Math.abs(diff);
    if (abs < 60) return rtf.format(Math.round(diff), 'second');
    const mins = diff / 60;
    if (Math.abs(mins) < 60) return rtf.format(Math.round(mins), 'minute');
    const hours = mins / 60;
    if (Math.abs(hours) < 24) return rtf.format(Math.round(hours), 'hour');
    const days = hours / 24;
    if (Math.abs(days) < 30) return rtf.format(Math.round(days), 'day');
    const months = days / 30;
    if (Math.abs(months) < 12) return rtf.format(Math.round(months), 'month');
    const years = months / 12;
    return rtf.format(Math.round(years), 'year');
  } catch {
    return ts;
  }
};

export default function OpinionesSection() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [sort, setSort] = useState('desc'); // 'desc' = mas recientes
  const [lastAddedId, setLastAddedId] = useState(null);

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
    } catch {}
  }, [items]);

  const onSubmit = (e) => {
    e.preventDefault();
    const n = name.trim();
    const t = text.trim();
    if (!n || !t) return;
    const item = { id: Date.now(), name: n, text: t, ts: new Date().toISOString() };
    setItems((prev) => [...prev, item]);
    setLastAddedId(item.id);
    try { toast({ title: 'Comentario agregado con exito' }); } catch {}
    setText('');
  };

  const hasItems = items && items.length > 0;
  const count = items?.length || 0;

  const ordered = useMemo(() => {
    const arr = [...items];
    arr.sort((a, b) => (sort === 'desc' ? b.id - a.id : a.id - b.id));
    return arr;
  }, [items, sort]);

  const clearAll = () => {
    const ok = window.confirm('Borrar todos los comentarios locales? Esta accion no se puede deshacer.');
    if (!ok) return;
    setItems([]);
    setLastAddedId(null);
    try { toast({ title: 'Comentarios eliminados' }); } catch {}
  };

  return (
    <section id="opiniones" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900" data-reveal>
            Opiniones y Reflexiones
          </h2>
          <p className="text-slate-600 mt-2" data-reveal style={{ transitionDelay: '80ms' }}>
            Comparte tus ideas sobre la etica de la IA. Los comentarios se guardan localmente en tu navegador.
          </p>
          <div className="mt-3 text-slate-500" data-reveal style={{ transitionDelay: '120ms' }}>
            Este espacio esta pensado para compartir ideas y reflexiones eticas sobre la inteligencia artificial. Se respetuoso y constructivo en tus aportes.
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex items-center justify-between px-4 pt-4 md:px-6">
            <div className="text-slate-400 text-sm">Opiniones: {count} {count === 1 ? 'publicada' : 'publicadas'}</div>
            <div className="flex items-center gap-3">
              <label htmlFor="opiniones-sort" className="text-sm text-slate-400">Ordenar</label>
              <select id="opiniones-sort" value={sort} onChange={(e) => setSort(e.target.value)} className="text-sm bg-transparent border border-slate-300 rounded-md px-2 py-1 text-slate-200">
                <option value="desc">Mas recientes</option>
                <option value="asc">Mas antiguos</option>
              </select>
              {hasItems && (
                <button onClick={clearAll} className="text-sm px-2 py-1 rounded-md border border-slate-300 hover:bg-slate-800 text-slate-100">Borrar todo</button>
              )}
            </div>
          </div>

          <div className="p-4 md:p-6">
            {hasItems ? (
              <div className="space-y-3">
                {ordered.map((it) => (
                  <article key={it.id} className={`border border-slate-200 rounded-lg p-4 bg-white transition-all duration-300 ${it.id === lastAddedId ? 'opacity-0 translate-y-1 anim-enter' : ''}`}>
                    <div className="flex items-start gap-3 mb-1">
                      <Avatar className="h-9 w-9 bg-slate-800/70">
                        <AvatarFallback className="text-slate-200">{(it.name || '?').trim().charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <strong className="text-slate-100 truncate">{it.name}</strong>
                          <time className="text-xs text-slate-400" dateTime={it.ts} title={fmtDate(it.ts)}>
                            {fmtRelative(it.ts)}
                          </time>
                        </div>
                        <p className="mt-1 whitespace-pre-wrap break-words text-slate-100">{it.text}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-slate-300">Aun no hay comentarios. Se la primera persona en opinar!</div>
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
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-slate-900/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="opiniones-text" className="font-medium text-slate-800">Comentario</label>
              <textarea
                id="opiniones-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribi tu comentario"
                required
                className="w-full min-h-[110px] px-3 py-2 rounded-lg border border-slate-300 bg-slate-900/60 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 resize-vertical"
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
