"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 hero-grid opacity-[0.6]" />
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute -left-40 top-[5%] h-[40rem] w-[40rem] rounded-full bg-blue-300/40 blur-[120px]"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-32 top-[35%] h-[34rem] w-[34rem] rounded-full bg-sky-200/55 blur-[110px]"
            animate={{
              x: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <motion.div
            className="absolute bottom-[6%] left-[18%] h-72 w-[28rem] rounded-full bg-indigo-200/45 blur-[100px]"
            animate={{ opacity: [0.35, 0.55, 0.35], y: [0, 14, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white/95 via-white/40 to-transparent" />
    </div>
  );
}
