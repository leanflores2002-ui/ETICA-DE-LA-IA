import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
