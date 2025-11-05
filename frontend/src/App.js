import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Temas from './pages/Temas';
import Casos from './pages/Casos';
import RecursosPage from './pages/RecursosPage';
import Herramientas from './pages/Herramientas';
import Cursos from './pages/Cursos';
import Sociedad from './pages/Sociedad';
import InteraccionesCTS from './pages/InteraccionesCTS';
import Estadisticas from './pages/Estadisticas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/temas" element={<Temas />} />
          <Route path="/sociedad" element={<Sociedad />} />
          <Route path="/interacciones-cts" element={<InteraccionesCTS />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/recursos" element={<RecursosPage />} />
          <Route path="/herramientas" element={<Herramientas />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
