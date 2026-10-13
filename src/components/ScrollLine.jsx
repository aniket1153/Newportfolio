import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollLine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-40 h-screen w-[3px] bg-white/5">
      <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-gradient-to-b from-cyan-300 to-cyan-500" />
    </div>
  );
}
