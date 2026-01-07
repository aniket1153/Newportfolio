import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SideButton() {
  return (
    <div
      className="fixed right-0 md:right-1 top-1/2 -translate-y-1/2 z-40"
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
