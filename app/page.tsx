"use client"
import { Navbar } from '@/components/NavBar'
import { HeroSection } from '@/components/HeroSection'
import AboutPage from './about/page'
import ExperiencePage from './experience/page'
import ProjectsPage from './projects/page'
import ContactPage from './contact/page'
import Divider from '@/components/Divider'

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <Divider />
      <AboutPage />
      
      <Divider />
      <ExperiencePage />
      
      <Divider />
      <ProjectsPage />
      
      <Divider />
      <ContactPage />
    </>
  )
}
