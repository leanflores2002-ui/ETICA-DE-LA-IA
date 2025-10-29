import React, { useEffect, useRef } from 'react';

export default function PageContainer({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    document.body.classList.add('theme-ethics');
    const el = ref.current;
    if (el) {
      requestAnimationFrame(() => el.classList.add('page-in'));
    }
    return () => {
      document.body.classList.remove('theme-ethics');
    };
  }, []);
  return (
    <div ref={ref} className="page">
      <div className="slide-content glass-strong">
        {children}
      </div>
    </div>
  );
}

