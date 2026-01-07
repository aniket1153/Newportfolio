import React from 'react'
import Navbar from '../components/Navbar'
import SideButton from '../components/SideButton'
import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import ExperienceSection from '../components/ExperienceSection'
import LinkedInPostsSection from '../components/LinkedInPostsSection'

const HomePage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <SideButton />
      <HeroSection />
      < SkillsSection/>
      <ProjectsSection/>
      <ExperienceSection/>
      <LinkedInPostsSection />
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default HomePage