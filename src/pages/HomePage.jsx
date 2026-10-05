import React from "react";
import Navbar from "../components/Navbar";
import SideButton from "../components/SideButton";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import SetuSection from "../components/SetuSection";
import ArchitectureSection from "../components/ArchitectureSection";
import PracticeSection from "../components/PracticeSection";
import ProfileDetails from "../components/ProfileDetails";
import PhotoCarousel from "../components/PhotoCarousel";
import GitHubSection from "../components/GitHubSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <SideButton />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <SetuSection />
      <ArchitectureSection />
      <PracticeSection />
      <ProfileDetails />
      <PhotoCarousel />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
