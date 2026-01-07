import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-gray-300">

        {/* Logo */}
        <h1 className="text-white text-xl font-bold">Aniket.dev</h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 items-center">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Contact</li>

          {/* Resume Button */}
          <li>
            <a
              href="/Aniket New.pdf"
              download
              className="border border-white px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
