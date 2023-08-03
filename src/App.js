import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './composents/entete/header'; // Remplacez 'component' par 'components'

import Footer from './composents/footer/footer';
import HomePage from './pages/homePage'; // Assurez-vous du bon nom ici, peut-être que le fichier s'appelle HomePage.js

import QuiJeSuis from './pages/pageQjs';

import MesServices from './pages/services'; // Assurez-vous que le chemin est correct
import MesCompetences from './pages/competences'; // Assurez-vous que le chemin est correct
import MesProjets from './pages/projets'; // Assurez-vous que le chemin est correct

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pageQjs" element={<QuiJeSuis />} />
        <Route path="/services" element={<MesServices />} />
        <Route path="/competences" element={<MesCompetences />} />
        <Route path="/projets" element={<MesProjets />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
