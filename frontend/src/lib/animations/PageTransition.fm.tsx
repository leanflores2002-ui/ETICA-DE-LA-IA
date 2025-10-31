// Requiere: npm i framer-motion
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * PageTransition (Framer Motion)
 * - Variants con ease tipo spring ligero
 * - Usa location.key para animar entre rutas
 */
export function PageTransitionFM({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.key}
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(8px)' }}
        transition={{ duration: 0.36, ease: [0.22, 0.61, 0.36, 1] }}
        style={{ willChange: 'opacity, filter' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransitionFM;

