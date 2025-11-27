import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

const LOADER_DURATION_MS = 5000;
const LOADER_EXIT_MS = 1100;

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const doScroll = () => {
      if (hash) {
        const targetId = hash.replace('#', '');
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    const t = setTimeout(doScroll, 50);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
}

function LoadingOverlay({ exiting }) {
  return (
    <div className={`loading-overlay ${exiting ? 'is-exiting' : ''}`}>
      <div className="loading-card">
        <div className="loading-title">Ética de la IA</div>
        <div className="loading-sub">Preparando la experiencia...</div>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isExitingLoader, setIsExitingLoader] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExitingLoader(true), LOADER_DURATION_MS);
    const hideTimer = setTimeout(() => setShowLoader(false), LOADER_DURATION_MS + LOADER_EXIT_MS);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="App">
      {showLoader && <LoadingOverlay exiting={isExitingLoader} />}
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
    </div>
  );
}

export default App;
