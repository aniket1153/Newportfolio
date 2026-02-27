import React, { useEffect } from "react";
import { motion } from "framer-motion";

const LuxuryIntro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const name = "ANIKET JOSHI".split("");

  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Soft animated gradient background */}
      <div className="absolute inset-0 luxury-bg"></div>

      {/* Name */}
      <motion.h1 className="relative text-5xl md:text-7xl font-semibold tracking-[0.4em] flex">
        {name.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="relative mt-8 text-gray-400 tracking-widest text-sm md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        Crafting Modern Web & Mobile Experiences
      </motion.p>
    </motion.div>
  );
};

export default LuxuryIntro;