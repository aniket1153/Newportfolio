import React from "react";

export default function SideButton() {
  return (
    <div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40"
      data-aos="fade-left"
    >
      <button className="rotate-90 bg-white text-black px-6 py-2 rounded-full font-semibold shadow-lg">
        Hire Me →
      </button>
    </div>
  );
}
