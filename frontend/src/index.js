import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
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
