"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  value: string;
  className?: string;
};

export function Counter({ value, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const target = parseFloat(value);
  const isNumeric = Number.isFinite(target);
  const suffix = isNumeric ? value.replace(/^[\d.,\s-]+/, "") : "";
  const motionValue = useMotionValue(0);
  const formatted = useTransform(motionValue, (latest) => {
    const rounded =
      target % 1 === 0 ? Math.round(latest) : latest.toFixed(1);
    return `${rounded}${suffix}`;
  });

  useEffect(() => {
    if (!isNumeric) return;
    if (!inView) return;
    if (reduceMotion) {
      motionValue.set(target);
      return;
    }
    const controls = animate(motionValue, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, isNumeric, motionValue, reduceMotion, target]);

  if (!isNumeric) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{formatted}</motion.span>
    </span>
  );
}
