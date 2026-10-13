import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiHandWavingDuotone, PiLaptopDuotone, PiStackDuotone, PiCodeDuotone } from "react-icons/pi";
import { TbUserCode } from "react-icons/tb";
import TextType from "./reactbits/TextType";
import SplitText from "./reactbits/SplitText";
import Particles from "./reactbits/Particles";

const lines = ["Hi, I'm Aniket Joshi.", "Software Developer.", "React Native, MERN, and backend systems."];
const lineIcons = [PiHandWavingDuotone, PiLaptopDuotone, PiStackDuotone];
const TYPING_SPEED = 35;

const CinematicIntro = ({ onFinish }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const timers = useRef([]);

  const later = useCallback((fn, ms) => {
    timers.current.push(setTimeout(fn, ms));
  }, []);

  useEffect(() => {
    const pending = timers.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) onFinish();
    return () => pending.forEach(clearTimeout);
  }, [onFinish]);

  useEffect(() => {
    if (!showFinal) return;
    later(() => {
      setFadeOut(true);
      later(onFinish, 1000);
    }, 3200);
  }, [showFinal, later, onFinish]);

  const onSentenceComplete = useCallback(
    (_, index) => {
      setLineIndex(index + 1);
      if (index === lines.length - 2) {
        later(() => setShowFinal(true), lines[lines.length - 1].length * TYPING_SPEED + 1100);
      }
    },
    [later]
  );

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#04050a] text-white transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0">
        <Particles
          particleCount={180}
          particleSpread={10}
          speed={0.06}
          particleColors={["#ffffff", "#67e8f9"]}
          particleBaseSize={70}
          sizeRandomness={0.8}
          alphaParticles
          moveParticlesOnHover={false}
          clickBurst={false}
          glow={0.3}
          twinkle={0.2}
          opacity={0.7}
        />
      </div>

      {!showFinal ? (
        <div className="relative flex items-center justify-center gap-4 px-6 text-center text-2xl font-light tracking-wide md:text-4xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={lineIndex}
              initial={{ opacity: 0, scale: 0.6, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-2xl text-cyan-300 md:h-14 md:w-14 md:text-3xl"
            >
              {React.createElement(lineIcons[lineIndex] ?? PiCodeDuotone, {
                className: lineIndex === 0 ? "origin-bottom-right animate-[wave_1.6s_ease-in-out_0.3s_1]" : undefined,
              })}
            </motion.span>
          </AnimatePresence>
          <TextType
            as="span"
            text={lines}
            typingSpeed={TYPING_SPEED}
            deletingSpeed={18}
            pauseDuration={900}
            initialDelay={300}
            loop={false}
            className="text-gray-200"
            cursorCharacter="|"
            onSentenceComplete={onSentenceComplete}
          />
        </div>
      ) : (
        <div className="relative px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/[0.04] text-3xl text-cyan-300 md:h-20 md:w-20 md:text-4xl"
          >
            <TbUserCode />
          </motion.div>
          <p className="mb-6 text-xl tracking-[0.6em] text-gray-400 smoothFade md:text-2xl">WELCOME</p>
          <div>
            <SplitText
              tag="h1"
              text="ANIKET JOSHI"
              splitType="chars"
              delay={45}
              duration={0.9}
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
              rootMargin="0px"
              className="pb-2 text-5xl font-semibold leading-tight tracking-wide sm:text-6xl md:text-8xl"
            />
          </div>
          <p className="mt-8 text-lg tracking-wide text-gray-400 smoothFade md:text-xl">
            <PiCodeDuotone className="mr-2 inline align-[-0.15em] text-cyan-300/80" />
            Web, mobile, and backend systems
          </p>
        </div>
      )}
    </div>
  );
};

export default CinematicIntro;
