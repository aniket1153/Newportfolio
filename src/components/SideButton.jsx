import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SideButton() {
  return (
    <div
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 xl:right-1 xl:block"
      data-aos="fade-left"
    >
      <a
        href="#contact"
        className="group rotate-90 bg-white text-black px-6 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2 hover:bg-amber-800 hover:text-white border border-black transition-all duration-300"
      >
        <span className="group-hover:translate-x-1 transition">
          Let’s Work
        </span>
        <FaPaperPlane className="text-sm" />
      </a>
    </div>
  );
}
