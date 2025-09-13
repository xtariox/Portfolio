"use client"
import {Navbar} from '@/components/NavBar' 
import {HeroSection} from '@/components/HeroSection'
import AboutPage from './about/page'
import Divider from '@/components/Divider'


export default function Page() {
return (
    <>
        <Navbar />
        <HeroSection />
        <Divider />
        <AboutPage />
        <Divider />
    </>
)
}