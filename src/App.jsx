import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CinematicIntro from "./components/CinematicIntro";
import TechBackground from "./components/TechBackground";

import HomePage from "./pages/HomePage";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <CinematicIntro onFinish={() => setLoading(false)} />}

      {!loading && (
        <Router>
          <TechBackground />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<Navigate to="/#about" replace />} />
              <Route path="/projects" element={<Navigate to="/#projects" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
};

export default App;