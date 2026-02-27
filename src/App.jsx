import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CinematicIntro from "./components/CinematicIntro";

import HomePage from "./pages/HomePage";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <CinematicIntro onFinish={() => setLoading(false)} />}

      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;