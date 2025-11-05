// Inicialización mínima (placeholder)
document.addEventListener('DOMContentLoaded', () => {
  // Forzamos scroll al video por si la página carga con hash
  const iframe = document.querySelector('iframe.video');
  if (iframe) iframe.scrollIntoView({ behavior: 'instant', block: 'center' });
});

