import React, { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const KEY = 'opiniones_v1';

export default function OpinionesSection() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      setItems(raw ? JSON.parse(raw) : []);
    } catch {
      setItems([]);
    }
  }, []);

  const save = (arr) => {
    setItems(arr);
    try { localStorage.setItem(KEY, JSON.stringify(arr)); } catch {}
  };

  const fmt = (ts) => {
    try {
      return new Intl.DateTimeFormat('es-AR', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(ts));
    } catch { return ts; }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const n = name.trim();
    const t = text.trim();
    if (!n || !t) return;
    const item = { id: Date.now(), name: n, text: t, ts: new Date().toISOString() };
    const arr = [...items, item]; // agrega debajo
    save(arr);
    setText('');
  };

  const count = useMemo(() => items.length, [items]);

  return (
    <section id="opiniones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Opiniones y Reflexiones</h2>
          <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
            Compartí tus ideas sobre la ética de la IA. Los comentarios se guardan en tu navegador.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6" data-stagger>
          <Card data-reveal className="reveal reveal-up md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Comentarios ({count})</CardTitle>
            </CardHeader>
            <CardContent>
              {items.length === 0 ? (
                <p className="text-slate-600">Aún no hay comentarios. ¡Sé la primera persona en opinar!</p>
              ) : (
                <div className="space-y-3">
                  {items.map((it) => (
                    <article key={it.id} className="border border-slate-200 rounded-xl p-4">
                      <div className="flex items-baseline gap-2 mb-1">
                        <strong className="text-slate-900">{it.name}</strong>
                        <time className="text-xs text-slate-500" dateTime={it.ts}>{fmt(it.ts)}</time>
                      </div>
                      <p className="text-slate-700 whitespace-pre-wrap">{it.text}</p>
                    </article>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Dejá tu comentario</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="grid gap-4" autoComplete="off">
                <div>
                  <Label htmlFor="op-name">Nombre</Label>
                  <Input id="op-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" required />
                </div>
                <div>
                  <Label htmlFor="op-text">Comentario</Label>
                  <Textarea id="op-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribí tu comentario" required />
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Publicar</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

