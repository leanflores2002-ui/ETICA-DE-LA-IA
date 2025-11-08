import React, { useEffect, useRef, useState } from 'react';

// Stopwords en ES para evitar coincidencias triviales
const SW = new Set([
  'el','la','los','las','un','una','lo','de','del','al','y','o','en','con','por','para','a','que','como','se','es','son','no','si','ya','su','sus','mas','más','tambien','también','muy','esto','esta','estos','estas'
]);

// Pequeño diccionario de alias/sinónimos
const ALIAS = {
  empleo: ['empleos','trabajo','laboral'],
  sociedad: ['social','comunidad'],
  sesgo: ['equidad','justicia','discriminacion','discriminación','discriminar'],
  privacidad: ['datos','personales','dato','privado'],
  transparencia: ['explicabilidad','explicable','explicar'],
  vigilancia: ['control','facial','camaras','cámaras'],
  desinformacion: ['deepfakes','sintetico','sintético','falso','fake']
};

const normalize = (t) => (t ? t
  .toLowerCase()
  .normalize('NFD')
  .replace(/\p{Diacritic}+/gu, '')
  .replace(/\s+/g, ' ')
  .trim() : '');

const tokenize = (t) => normalize(t)
  .split(/[^\p{L}\p{N}]+/u)
  .filter((w) => w && w.length >= 3 && !SW.has(w));

const splitSentences = (t) => t
  .split(/(?<=[\.!\?])\s+|\n+/g)
  .map((s) => s.trim())
  .filter(Boolean);

function expandTerms(tokens) {
  const e = new Set(tokens);
  for (const t of tokens) {
    for (const [k, vs] of Object.entries(ALIAS)) {
      if (t === k || vs.includes(t)) {
        e.add(k);
        vs.forEach((v) => e.add(v));
      }
    }
  }
  return [...e];
}

function useDomIndex(exRef) {
  const [sections, setSections] = useState([]);
  const toRef = useRef();

  useEffect(() => {
    const build = () => {
      try {
        const ex = exRef?.current || null;
        const nodes = [
          ...document.body.querySelectorAll('section, main, article, [role="main"]')
        ];
        const secs = [];
        for (const n of nodes) {
          if (!n || (ex && (ex === n || ex.contains(n)))) continue; // excluye el chat
          const h = n.querySelector('h1,h2,h3,h4');
          const heading = h?.innerText?.trim() || n.getAttribute('aria-label') || n.id || 'Contenido';
          const text = (n.innerText || '').trim();
          if (!text) continue;
          const sentences = splitSentences(text).map((s) => ({ original: s, tokens: tokenize(s) }));
          secs.push({ heading, text, sen: sentences });
        }
        setSections(secs);
      } catch (e) {
        // no-op
      }
    };
    build();
    const mo = new MutationObserver(() => {
      if (toRef.current) clearTimeout(toRef.current);
      toRef.current = setTimeout(build, 250);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      if (toRef.current) clearTimeout(toRef.current);
      mo.disconnect();
    };
  }, []);
  return sections;
}

function bestAnswer(query, sections) {
  const qRaw = tokenize(query);
  if (!qRaw.length) return null;
  const qset = new Set(expandTerms(qRaw));
  let best = null;
  for (let si = 0; si < sections.length; si++) {
    const s = sections[si];
    for (let i = 0; i < s.sen.length; i++) {
      const sent = s.sen[i];
      if (!sent.tokens?.length) continue;
      let overlap = 0;
      for (const t of sent.tokens) if (qset.has(t)) overlap++;
      if (overlap > 0) {
        let hOver = 0;
        const hset = new Set(tokenize(s.heading || ''));
        for (const t of qset) if (hset.has(t)) hOver++;
        const score = overlap + hOver * 0.75 + Math.min(sent.tokens.length, 30) / 120;
        if (!best || score > best.score) best = { score, heading: s.heading, sent: sent.original, sidx: si, idx: i };
      }
    }
  }
  return best;
}

function isGreeting(q) {
  const n = normalize(q);
  return /^(hola|buenas|buen dia|buen d[ií]a|hey|hello)/i.test(n);
}

function isMoreRequest(q) {
  const n = normalize(q);
  return /\b(mas|más|amplia|ampl[ií]a|segu[ií]|sigue|detalle|detalles)\b/.test(n) || /^m[aá]s sobre /.test(n);
}



// Respuestas cortas afirmativas/continuaci�n de contexto
function isAffirmative(q) {
  const n = normalize(q);
  return /^(si|ok|okay|okey|dale|claro|vale|continuar|continua|sigue|segui|adelante)$/.test(n);
}
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function buildFallback(sections) {
  const headings = [...new Set(sections.map((s) => s.heading).filter(Boolean))].slice(0, 4);
  const base = pick([
    'Puedo ayudarte con lo que aparece en esta página.',
    'Respondo usando el contenido visible aquí.',
    'Estoy enfocado en esta página para darte respuestas precisas.'
  ]);
  const prompt = headings.length ? ` Decime una palabra clave o elegí una sección: ${headings.join(' · ')}.` : ' Decime una palabra clave o sección.';
  return base + prompt;
}

function nextFromContext(ctx, sections, count = 2) {
  if (!ctx) return null;
  const s = sections[ctx.sidx];
  if (!s) return null;
  const start = Math.min(ctx.idx + 1, s.sen.length - 1);
  if (start < 0 || start >= s.sen.length) return null;
  const slice = s.sen.slice(start, Math.min(start + count, s.sen.length)).map((x) => x.original);
  if (!slice.length) return null;
  return { text: slice.join(' '), nextIdx: start + slice.length - 1, heading: s.heading };
}

export default function FloatingChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState([
    {
      role: 'bot',
      text: '¡Hola! Soy tu asistente de Ética de la IA. Puedo ayudarte a explorar lo que aparece en esta página. ¿Sobre qué tema querés saber?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const ctxRef = useRef(null); // { sidx, idx }

  const rootRef = useRef(null);
  const sections = useDomIndex(rootRef);
  const listRef = useRef(null);
  

  // Mantiene el scroll al final
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [msgs, open, isTyping]);
  // (barra de sugerencias removida)

  // Mensaje inicial adicional más explícito
  useEffect(() => {
    setMsgs((prev) => {
      if (!prev.some((m) => m._intro2)) {
        return [
          ...prev,
          {
            role: 'bot',
            text:
              'Puedo responder tus dudas sobre cualquiera de las secciones del sitio. Preguntame lo que quieras sobre la ética de la inteligencia artificial.',
            _intro2: true,
          },
        ];
      }
      return prev;
    });
    // solo una vez al montar
  }, [] );
  const scrollToHeading = (heading) => {
    if (!heading) return false;
    const slug = heading
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}+/gu, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const byId = document.getElementById(heading) || document.getElementById(slug) || document.getElementById('opiniones');
    if (byId) {
      byId.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    const nodes = [
      ...document.body.querySelectorAll('section, main, article, [role="main"]')
    ];
    for (const n of nodes) {
      const h = n.querySelector('h1,h2,h3,h4');
      const t = h?.innerText?.trim();
      if (t && t === heading) {
        n.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
    }
    return false;
  };

  const send = (e, override) => {
    e?.preventDefault?.();
    const q = (override ?? input).trim();
    if (!q) return;
    setInput('');
    setMsgs((p) => [...p, { role: 'user', text: q }]);
    setIsTyping(true);

    setTimeout(() => {
      const qn = normalize(q);

      // Peticiones especiales
      if (isGreeting(qn)) {
        const heads = [...new Set(sections.map((s) => s.heading))].slice(0, 4);
        setMsgs((p) => [
          ...p,
          { role: 'bot', text: `¡Hola! ¿Qué te interesa? Puedo contarte sobre: ${heads.join(' · ')}` }
        ]);
        setIsTyping(false);
        return;
      }

      if (isIndexRequest(qn)) {
        const heads = [...new Set(sections.map((s) => s.heading))];
        const txt = heads.length ? `Secciones disponibles: ${heads.join(' · ')}` : 'No pude detectar secciones en esta página.';
        setMsgs((p) => [...p, { role: 'bot', text: txt }]);
        setIsTyping(false);
        return;
      }

      if (isAffirmative(qn) || isMoreRequest(qn)) {
        const more = nextFromContext(ctxRef.current, sections, 2);
        if (more) {
          ctxRef.current = { sidx: ctxRef.current.sidx, idx: more.nextIdx };
          setMsgs((p) => [...p, { role: 'bot', text: `${more.text} ¿Querés que siga?` }]);
        } else {
          setMsgs((p) => [...p, { role: 'bot', text: '¿De qué sección querés saber más?' }]);
        }
        setIsTyping(false);
        return;
      }

      // Búsqueda por solapamiento
      const b = bestAnswer(q, sections);
      if (!b) {
        const heads = [...new Set(sections.map((s) => s.heading))];
        const suggest = heads[0];
        const txt = heads.length
          ? `No encontré información precisa sobre eso. ¿Querés explorar la sección más relacionada? ${suggest}`
          : buildFallback(sections);
        setMsgs((p) => [...p, { role: 'bot', text: txt, jumpHeading: suggest }]);
        setIsTyping(false);
        return;
      }

      const sn = b.sent.length > 280 ? `${b.sent.slice(0, 277)}…` : b.sent;
      const hl = b.heading && b.heading !== 'Contenido' ? `En la sección "${b.heading}" se menciona: ` : 'En esta página se menciona: ';
      const variants = [
        `${hl}${sn} ¿Querés que amplíe?`,
        `${hl}${sn} ¿Te cuento más sobre "${b.heading}"?`,
        `${hl}${sn} Puedo ampliar o buscar otra sección.`
      ];
      const ans = pick(variants);

      ctxRef.current = { sidx: b.sidx, idx: b.idx };
      setMsgs((p) => [...p, { role: 'bot', text: ans, jumpHeading: b.heading }]);
      setIsTyping(false);
    }, 90);
  };

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) send(e);
  };
  return (
    <div ref={rootRef} className="fixed z-[2000] bottom-4 right-4 select-none" aria-live="polite">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="h-14 w-14 rounded-full bg-slate-800 text-white shadow-xl hover:scale-105 active:scale-95 transition-transform grid place-items-center border border-slate-700"
          aria-label="Abrir chat"
        >
          <span className="text-xl" role="img" aria-label="chat">💬</span>
        </button>
      )}

      {open && (
        <div
          className="w-[86vw] max-w-[380px] md:max-w-[420px] max-h-[75vh] bg-slate-900/95 backdrop-blur rounded-2xl shadow-2xl border border-slate-700 overflow-hidden grid grid-rows-[auto,1fr,auto,auto]"
          style={{ boxShadow: '0 10px 30px rgba(2,6,23,0.45)' }}
        >
          <div className="bg-slate-800/95 text-white px-4 py-3 flex items-center justify-between">
            <div>
              <h3 className="font-serif font-semibold">Asistente Ética de IA</h3>
              <p className="text-xs text-slate-300">Respondo con base en esta página</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-2 py-1 text-slate-200 hover:text-white rounded-md hover:bg-slate-700 transition-colors"
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>

          <div ref={listRef} className="p-3 space-y-3 overflow-y-auto min-h-0">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div style={{ maxWidth: '85%' }}>
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm leading-relaxed shadow ${m.role === 'user' ? 'bg-slate-700 text-white rounded-br-sm' : 'bg-slate-800 text-slate-100 rounded-bl-sm'}`}
                  >
                    {m.text}
                  </div>
                  {m.role === 'bot' && m.jumpHeading && (
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={() => scrollToHeading(m.jumpHeading)}
                        className="text-xs px-2.5 py-1.5 rounded-full border border-slate-600 text-slate-200 hover:bg-slate-700/60"
                        title={`Ir a ${m.jumpHeading}`}
                      >
                        Ir a “{m.jumpHeading}”
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-2xl text-sm leading-relaxed shadow bg-slate-800 text-slate-100 rounded-bl-sm">
                  Escribiendo…
                </div>
              </div>
            )}
          </div>

          {quickSuggestions.length > 0 && (
            <div className="px-3 pb-1 flex gap-2 overflow-x-auto whitespace-nowrap flex-shrink-0">
              {quickSuggestions.map((s, i) => (
                <button
                  key={`${s}-${i}`}
                  type="button"
                  onClick={() => handleQuick(s)}
                  className="text-xs px-2.5 py-1.5 rounded-full border border-slate-600 text-slate-200 hover:bg-slate-700/60"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={send} className="border-t border-slate-700 bg-slate-900/80 p-2 flex items-center gap-2 flex-shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="Escribí tu pregunta…"
              className="flex-1 bg-slate-800 text-slate-100 placeholder-slate-400 text-sm px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-slate-600 focus:bg-slate-800/90 border border-slate-700 min-h-[42px]"
              aria-label="Ingresar pregunta"
            />
            <button
              type="submit"
              className="bg-slate-700 hover:bg-slate-600 text-white text-sm px-3 py-2 rounded-xl border border-slate-600 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}













