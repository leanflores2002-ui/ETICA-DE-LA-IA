import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import { initAnimations } from "@/lib/animations/animations";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimationsBootstrap />
    <CursorLight />
    <App />
  </React.StrictMode>,
);

// Efecto ligero: luz que sigue el cursor usando variables CSS
function CursorLight() {
  useEffect(() => {
    const handler = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.body.style.setProperty("--mx", `${x}%`);
      document.body.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);
  return null;
}

// Inicializa animaciones (reveal, counters, tilt, parallax, sticky CTA)
function AnimationsBootstrap() {
  useEffect(() => {
    const cleanup = initAnimations({ once: true, stagger: 48 });
    return () => cleanup && cleanup();
  }, []);
  return null;
}
