import React from 'react'
import HomeHero from './HeroSection'
import ServicesSection from './ServiceSection'
import ProjectsSection from './ProjectsSection'
import Action from './Action'
import TestimonialsSection from './TestimonialsSection'
import FactoryHomePage from './FactoryHomePage'
import DevisForm from '../components/DevisForm'

const HomePage = () => {
  return (
    <>
    <HomeHero/>
  
    <FactoryHomePage />
    <ServicesSection/>
    <Action/>
   
    <ProjectsSection/>
    <DevisForm/>
    <TestimonialsSection/>

        </>
  )
}

export default HomePage