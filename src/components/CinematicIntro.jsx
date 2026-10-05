import React, { useEffect, useState } from "react";

const lines = [
  "Hi, I'm Aniket Joshi.",
  "Software Developer.",
  "React Native, MERN, and backend systems."
];

const CinematicIntro = ({ onFinish }) => {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Typing Effect
  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + lines[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setLineIndex(lineIndex + 1);
        }, 900);
      }
    } else {
      setTimeout(() => setShowFinal(true), 600);
    }
  }, [charIndex, lineIndex]);

  // Exit animation
  useEffect(() => {
    if (showFinal) {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onFinish, 1400);
      }, 3500);
    }
  }, [showFinal, onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center text-white z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 animated-bg"></div>
      <div className="absolute inset-0 luxury-bg"></div>
      <div className="absolute inset-0 particles"></div>

      {!showFinal ? (
        <div className="relative text-2xl md:text-4xl font-light tracking-wide text-center px-6">
          <span className="text-green-400">&gt;</span>{" "}
          <span className="text-gray-200">{text}</span>
          <span className="blinking-cursor ml-1">|</span>
        </div>
      ) : (
        <div className="relative text-center animate-fadeUp px-6">
          {/* WELCOME */}
          <h2 className="text-xl md:text-2xl tracking-[0.6em] text-gray-400 mb-6 smoothFade">
            WELCOME
          </h2>

          {/* NAME */}
          <h1 className="text-6xl md:text-8xl font-semibold tracking-wide leading-tight">
            <span className="gradient-text glow-text">
              ANIKET JOSHI
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-8 text-lg md:text-xl text-gray-400 tracking-wide">
            Web, mobile, and backend systems
          </p>
        </div>
      )}
    </div>
  );
};

export default CinematicIntro;