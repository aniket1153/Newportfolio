import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaInstagram, FaHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import avatar from "../assets/MyImage.jpg";
import work from "../assets/gallery-work.jpg";
import formal from "../assets/gallery-formal.jpg";
import festive from "../assets/gallery-festive.jpg";
import smile from "../assets/gallery-smile.jpg";
import fountain from "../assets/gallery-fountain.jpg";
import kurta from "../assets/gallery-kurta.jpg";

// `position` keeps faces in frame when the 4:5 card crops taller photos.
const slides = [
  { title: "On the job", caption: "Day at work", image: work, position: "50% 35%" },
  { title: "Formal", caption: "Suited up", image: formal, position: "50% 30%" },
  { title: "Festive", caption: "Festival vibes", image: festive, position: "50% 30%" },
  { title: "Good mood", caption: "Weekend out", image: smile, position: "50% 35%" },
  { title: "By the fountain", caption: "Off screen", image: fountain, position: "50% 35%" },
  { title: "Traditional", caption: "Festive look", image: kurta, position: "50% 30%" },
];

function PhotoCarousel() {
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(1200);
  const stageRef = useRef(null);
  const touchX = useRef(null);
  const count = slides.length;

  const go = (direction) => setActive((current) => (current + direction + count) % count);

  // Depending on `active` restarts the countdown after any manual navigation.
  useEffect(() => {
    const timer = setTimeout(() => setActive((current) => (current + 1) % count), 3500);
    return () => clearTimeout(timer);
  }, [active, count]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const visibleSide = width < 640 ? 1 : 2;
  const cardWidth = width < 640 ? Math.min(width * 0.72, 280) : Math.min(300, width / 4.2);
  const spacing = visibleSide === 1 ? width * 0.36 : (width - cardWidth) / 4;

  const place = (index) => {
    let diff = index - active;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

  return (
    <section className="scroll-mt-28 overflow-hidden px-6 py-24 text-white" id="gallery">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 font-mono text-sm text-pink-300">
              <FaInstagram /> $ open ./gallery
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">A different frame</h2>
            <p className="mt-3 max-w-xl text-gray-400">A look away from the editor — moments, places, and work days.</p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/aniket_joshi_1153/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-tr from-amber-400 via-pink-500 to-violet-500 px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(236,72,153,0.45)]"
            >
              <FaInstagram /> Follow
            </a>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/50 transition hover:border-pink-400/60 hover:text-pink-300"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/50 transition hover:border-pink-400/60 hover:text-pink-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={stageRef}
          className="relative w-full"
          style={{ height: Math.round(cardWidth * 1.25 + 150) }}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/15 blur-3xl" />

          {slides.map((slide, index) => {
            const diff = place(index);
            const hidden = Math.abs(diff) > visibleSide;
            const isActive = diff === 0;
            const scale = isActive ? 1 : Math.abs(diff) === 1 ? 0.86 : 0.74;
            return (
              <article
                key={slide.title}
                onClick={() => !isActive && setActive(index)}
                className={`absolute left-1/2 top-4 transition-all duration-500 ease-out ${isActive ? "" : "cursor-pointer"}`}
                style={{
                  width: cardWidth,
                  transform: `translateX(calc(-50% + ${diff * spacing}px)) scale(${scale})`,
                  opacity: hidden ? 0 : isActive ? 1 : Math.abs(diff) === 1 ? 0.75 : 0.4,
                  zIndex: 10 - Math.abs(diff),
                  pointerEvents: hidden ? "none" : "auto",
                  filter: isActive ? "none" : "saturate(0.7)",
                }}
              >
                <div
                  className={`overflow-hidden rounded-[1.75rem] border bg-[#0a0a0f] transition ${
                    isActive ? "border-pink-400/40 shadow-[0_0_50px_rgba(236,72,153,0.25)]" : "border-white/10 shadow-2xl"
                  }`}
                >
                  <div className="flex items-center gap-2.5 px-4 py-3">
                    <span className="rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-violet-500 p-[2px]">
                      <img src={avatar} alt="" className="h-8 w-8 rounded-full border-2 border-[#0a0a0f] object-cover" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-xs font-semibold">aniket_joshi_1153</p>
                      <p className="text-[10px] text-gray-400">Pune, India</p>
                    </div>
                  </div>

                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/5">
                    <img
                      src={slide.image}
                      alt={`Aniket Joshi — ${slide.title}`}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      className={`h-full w-full select-none object-cover transition duration-700 ${isActive ? "scale-100" : "scale-105"}`}
                      style={{ objectPosition: slide.position }}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                    <p className="absolute bottom-3 left-4 text-sm font-semibold drop-shadow">{slide.title}</p>
                  </div>

                  <div className="flex items-center gap-4 px-4 py-3 text-lg text-gray-300">
                    <FaHeart className={isActive ? "text-pink-500" : ""} />
                    <FaRegComment />
                    <FaRegPaperPlane />
                    <span className="truncate text-xs text-gray-400">{slide.caption}</span>
                    <span className="ml-auto shrink-0 font-mono text-[10px] text-gray-500">
                      {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-2 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show ${slide.title}`}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all ${index === active ? "w-8 bg-gradient-to-r from-pink-400 to-violet-400" : "w-2 bg-white/25 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhotoCarousel;
