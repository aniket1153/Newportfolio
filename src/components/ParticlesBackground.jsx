import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // behind all content
        background: { color: "transparent" }, // transparent so your sections show their bg
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: false },
            resize: true,
          },
          modes: { repulse: { distance: 80, duration: 0.4 } },
        },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#555", distance: 120, opacity: 0.2, width: 1 },
          collisions: { enable: false },
          move: { enable: true, speed: 1, direction: "none", random: true, straight: false, outModes: "out" },
          number: { value: 60, density: { enable: true, area: 800 } },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;
