import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Temas from './pages/Temas';
import Casos from './pages/Casos';
import RecursosPage from './pages/RecursosPage';
import Herramientas from './pages/Herramientas';
import Cursos from './pages/Cursos';
// Eliminadas: Sociedad e InteraccionesCTS
import Estadisticas from './pages/Estadisticas';
import FloatingChatWidget from '@/components/FloatingChatWidget';
import { Toaster } from '@/components/ui/toaster';
import Opiniones from './pages/Opiniones';
import Impactos from './pages/Impactos';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }));
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/temas" element={<Temas />} />
          {/* Rutas eliminadas: /sociedad y /interacciones-cts */}
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/recursos" element={<RecursosPage />} />
          <Route path="/herramientas" element={<Herramientas />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/opiniones" element={<Opiniones />} />
          <Route path="/impactos" element={<Impactos />} />
          <Route path="/sociedad" element={<Navigate to="/impactos" replace />} />
          <Route path="/interacciones-cts" element={<Navigate to="/impactos" replace />} />
        </Routes>
        <FloatingChatWidget />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
