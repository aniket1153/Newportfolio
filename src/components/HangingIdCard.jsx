import React, { useEffect, useRef } from "react";
import { motion, animate, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import img1 from "../assets/MyImage.jpg";

const MAX_ANGLE = 32;
const swing = { type: "spring", stiffness: 60, damping: 4.5, mass: 1.1 };
const bars = [3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2];

export default function HangingIdCard() {
  const reduceMotion = useReducedMotion();
  const pivotRef = useRef(null);
  const dragging = useRef(false);
  const last = useRef({ angle: 0, time: 0, velocity: 0 });
  const rotate = useMotionValue(reduceMotion ? 0 : 22);
  const shadowX = useTransform(rotate, (r) => `${-r * 0.6}px`);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const controls = animate(rotate, 0, { ...swing, delay: 0.5 });
    return () => controls.stop();
  }, [reduceMotion, rotate]);

  const angleFromPointer = (event) => {
    const pivot = pivotRef.current.getBoundingClientRect();
    const dx = event.clientX - (pivot.left + pivot.width / 2);
    const dy = Math.max(event.clientY - pivot.top, 40);
    const angle = (-Math.atan2(dx, dy) * 180) / Math.PI;
    return Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, angle));
  };

  const onPointerDown = (event) => {
    if (reduceMotion) return;
    dragging.current = true;
    rotate.stop();
    event.currentTarget.setPointerCapture(event.pointerId);
    last.current = { angle: rotate.get(), time: performance.now(), velocity: 0 };
  };

  const onPointerMove = (event) => {
    if (!dragging.current) return;
    const angle = angleFromPointer(event);
    const now = performance.now();
    const dt = Math.max(now - last.current.time, 1);
    last.current = { angle, time: now, velocity: ((angle - last.current.angle) / dt) * 1000 };
    rotate.set(angle);
  };

  const release = () => {
    if (!dragging.current) return;
    dragging.current = false;
    animate(rotate, 0, { ...swing, velocity: last.current.velocity });
  };

  return (
    <motion.div
      className="relative mx-auto flex w-full max-w-[320px] flex-col items-center md:-mt-12 md:mr-14 md:self-start"
      initial={reduceMotion ? false : { y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div data-id-card style={{ rotate }} className="flex origin-top flex-col items-center">
        <div ref={pivotRef} className="relative flex h-20 w-9 justify-center md:h-28">
          <div className="absolute inset-y-0 left-0 w-[15px] -skew-x-[8deg] bg-gradient-to-b from-cyan-600 to-cyan-400" />
          <div className="absolute inset-y-0 right-0 w-[15px] skew-x-[8deg] bg-gradient-to-b from-cyan-700 to-cyan-500" />
          <span className="absolute inset-y-0 left-1/2 flex -translate-x-1/2 items-center overflow-hidden [writing-mode:vertical-rl]">
            <span className="whitespace-nowrap text-[8px] font-semibold tracking-[0.3em] text-black/50">
              ANIKET JOSHI · ANIKET JOSHI · ANIKET JOSHI ·
            </span>
          </span>
        </div>

        <div className="relative z-10 -mt-1 flex flex-col items-center">
          <div className="h-3 w-12 rounded-t-md bg-gradient-to-b from-gray-300 to-gray-500" />
          <div className="h-5 w-7 rounded-b-lg border-x-[5px] border-b-[5px] border-gray-400" />
        </div>

        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={release}
          onPointerCancel={release}
          className={`relative -mt-3 w-[280px] select-none touch-pan-y sm:w-[300px] ${reduceMotion ? "" : "cursor-grab active:cursor-grabbing"}`}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#111827] to-[#0a0e16] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
            <div className="relative flex items-center justify-between border-b border-white/10 px-5 pb-3 pt-5">
              <span className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/60 ring-1 ring-white/10" />
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[11px] font-bold text-black">AJ</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-300">Developer</span>
              </div>
              <span className="font-mono text-[10px] text-gray-500">ID · AJ-1153</span>
            </div>

            <div className="p-5">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img src={img1} alt="Aniket Joshi" draggable="false" className="aspect-[4/4.2] w-full object-cover object-top" />
              </div>

              <div className="mt-4">
                <p className="text-lg font-semibold text-white">Aniket Joshi</p>
                <p className="text-sm text-cyan-300">Software Developer</p>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-xs">
                <div>
                  <dt className="text-gray-500">Stack</dt>
                  <dd className="mt-0.5 text-gray-200">React Native · MERN</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Based in</dt>
                  <dd className="mt-0.5 text-gray-200">Pune, India</dd>
                </div>
              </dl>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div className="flex h-8 items-end gap-[2px] opacity-70" aria-hidden="true">
                  {bars.map((w, i) => (
                    <span key={i} className="h-full bg-gray-300" style={{ width: w }} />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ x: shadowX }}
        className="mt-6 h-4 w-48 rounded-[50%] bg-black/50 blur-md"
      />
    </motion.div>
  );
}
