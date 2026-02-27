import React, { useEffect, useState } from "react";

const greetings = ["Hi", "Hola", "Bonjour", "Namaste", "こんにちは"];

const IntroScreen = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("greetings"); 
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const greetTimer = setInterval(() => {
      setIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(greetTimer);
          setTimeout(() => setPhase("welcome"), 800);
          return prev;
        }
      });
    }, 700);

    const finishTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onFinish();
      }, 800);
    }, 5000);

    return () => {
      clearInterval(greetTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {phase === "greetings" ? (
        <h1 className="text-5xl md:text-7xl font-bold smoothFade">
          {greetings[index]}
        </h1>
      ) : (
        <div className="text-center smoothFade">
          <p className="text-xl md:text-2xl text-gray-400 mb-4 tracking-widest">
            Welcome to
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400 tracking-wide">
            Aniket Joshi's Portfolio
          </h1>
        </div>
      )}
    </div>
  );
};

export default IntroScreen;