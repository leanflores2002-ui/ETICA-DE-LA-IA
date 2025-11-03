import React, { useState, useCallback } from 'react';

// SafeImage: muestra una imagen con fallback si falla la carga
// Props: src, alt, className, loading, decoding, fetchpriority, referrerPolicy, ...rest
export default function SafeImage({
  src,
  alt = '',
  className = '',
  loading,
  decoding = 'async',
  fetchpriority,
  referrerPolicy = 'no-referrer',
  ...rest
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  const onError = useCallback(() => {
    // Fallback placeholder confiable
    const fallback = 'https://placehold.co/1200x800?text=Imagen%20no%20disponible';
    if (currentSrc !== fallback) setCurrentSrc(fallback);
  }, [currentSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchpriority={fetchpriority}
      referrerPolicy={referrerPolicy}
      onError={onError}
      {...rest}
    />
  );
}

