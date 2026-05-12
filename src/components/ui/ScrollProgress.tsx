"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500"
      style={{ scaleX: width }}
      aria-hidden
    />
  );
}
