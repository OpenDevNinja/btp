import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building, 
  Wrench, 
  Factory, 
  Filter 
} from 'lucide-react';
import Helmet from '../components/Helmet';
import image1 from '../assets/image/image_3.jpg';
import image2 from '../assets/image/image_2.jpg';
import image3 from '../assets/image/image_5.jpg';
import image4 from '../assets/image/image_10.jpg';
import image5 from '../assets/image/image_11.jpg';
import image6 from '../assets/image/image_12.jpg';
import ProjectsSection from './ProjectsSection';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const projectCategories = [
    { name: 'Tous', icon: <Filter size={24} /> },
    { name: 'Maisons', icon: <Home size={24} /> },
    { name: 'Immeubles', icon: <Building size={24} /> },
    { name: 'Infrastructures', icon: <Wrench size={24} /> },
    { name: 'Industriel', icon: <Factory size={24} /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Maison Contemporaine",
      category: "Maisons",
      description: "Villa moderne avec design écologique",
      image: image1,
      year: 2023,
    },
    {
      id: 2,
      title: "Immeuble de Bureaux",
      category: "Immeubles",
      description: "Espace de travail innovant et durable",
      image: image2,
      year: 2022,
    },
    {
      id: 3,
      title: "Pont Urbain",
      category: "Infrastructures",
      description: "Infrastructure de transport moderne",
      image: image3,
      year: 2021,
    },
    {
      id: 4,
      title: "Usine de Production",
      category: "Industriel",
      description: "Complexe industriel avec efficacité énergétique",
      image: image4,
      year: 2020,
    },
    {
      id: 5,
      title: "Maison Familiale",
      category: "Maisons",
      description: "Maison spacieuse avec une touche traditionnelle",
      image: image5,
      year: 2019,
    },
    {
      id: 6,
      title: "Complexe Résidentiel",
      category: "Immeubles",
      description: "Ensemble moderne de logements pour familles",
      image: image6,
      year: 2021,
    },
    {
      id: 7,
      title: "École Élémentaire",
      category: "Infrastructures",
      description: "Conception ergonomique adaptée à l'éducation",
      image: image2,
      year: 2020,
    },
    {
      id: 8,
      title: "Centre Logistique",
      category: "Industriel",
      description: "Entrepôt moderne avec système de gestion automatisé",
      image: image3,
      year: 2023,
    },
    {
      id: 9,
      title: "Maison de Vacances",
      category: "Maisons",
      description: "Résidence secondaire en bord de mer",
      image: image1,
      year: 2022,
    },
    {
      id: 10,
      title: "Gratte-Ciel Urbain",
      category: "Immeubles",
      description: "Tour emblématique pour un centre financier",
      image: image4,
      year: 2018,
    },
    {
      id: 11,
      title: "Route Express Régionale",
      category: "Infrastructures",
      description: "Route sécurisée et durable pour le transport rapide",
      image: image5,
      year: 2017,
    },
    {
      id: 12,
      title: "Atelier Mécanique",
      category: "Industriel",
      description: "Infrastructure dédiée à la production automobile",
      image: image6,
      year: 2021,
    },
  ];
  

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
    <Helmet title="Nos Projects" subTitle="Découvrez nos projets" />
    <div className="container mx-auto py-16 px-4">
    <ProjectsSection/>
    </div>
    </>
  );
};

export default ProjectsPage;