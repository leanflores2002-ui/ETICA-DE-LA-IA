import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Temas from './pages/Temas';
import Casos from './pages/Casos';
import RecursosPage from './pages/RecursosPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/temas" element={<Temas />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/recursos" element={<RecursosPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
