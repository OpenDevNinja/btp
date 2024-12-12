import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import BTPWebsite from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import DevisForm from './pages/Devis';
import RealisationPage from './pages/RealisationPage';



const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<BTPWebsite />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/services" element={<ServicesPage />} />
         <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
         <Route path="/projects" element={<ProjectsPage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="devis" element={<DevisForm />} />
         <Route path="realisations" element={<RealisationPage />} />

         
        </Route>
        {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;