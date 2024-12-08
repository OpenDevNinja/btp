import React from 'react'
import HomeHero from './HeroSection'
import ServicesSection from './ServiceSection'
import ProjectsSection from './ProjectsSection'
import Action from './Action'
import TestimonialsSection from './TestimonialsSection'
import FactoryHomePage from './FactoryHomePage'
import DevisForm from '../components/DevisForm'
import WhyChooseUs from './WhyChooseUs'

const HomePage = () => {
  return (
    <>
    <HomeHero/>
  
    <FactoryHomePage />
    <ServicesSection/>
    <WhyChooseUs/>
    <Action/>
   
    <ProjectsSection/>
    <DevisForm/>
    <TestimonialsSection/>

        </>
  )
}

export default HomePage