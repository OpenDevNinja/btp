import React from 'react'
import HomeHero from './HeroSection'
import ServicesSection from './ServiceSection'
import ProjectsSection from './ProjectsSection'
import Action from './Action'
import TestimonialsSection from './TestimonialsSection'
import FactoryHomePage from './FactoryHomePage'
import DevisForm from '../components/DevisForm'
import WhyChooseUs from './WhyChooseUs'
import Realisation from './Realisation'

const HomePage = () => {
  return (
    <>
    <HomeHero/>
  
    <FactoryHomePage />
    <ServicesSection/>
    <WhyChooseUs/>
    <Action/>
   
    <ProjectsSection/>

    
    <Realisation/>
    <DevisForm/>
 
        </>
  )
}

export default HomePage