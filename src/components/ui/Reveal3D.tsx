import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface Reveal3DProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  enableParallax?: boolean;
  parallaxSpeed?: number; // -1 to 1, where negative moves opposite to scroll
}

const Reveal3D: React.FC<Reveal3DProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  enableParallax = false,
  parallaxSpeed = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Initial animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: 0.95,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Custom easeOutQuint-like curve
      },
    },
  };

  // Parallax transform
  const y = useTransform(smoothProgress, [0, 1], [0, enableParallax ? parallaxSpeed * 500 : 0]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      style={enableParallax ? { y } : {}}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Reveal3D;
