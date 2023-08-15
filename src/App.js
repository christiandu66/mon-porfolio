import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './composents/entete/header';

import Footer from './composents/footer/footer';
import HomePage from './pages/home/homePage';
import QuiJeSuis from './pages/qjs/pageQjs';

import MesCompetences from './pages/cpts/competences';
import MesProjets from './pages/projets/projets';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pageQjs" element={<QuiJeSuis />} />

        <Route path="/competences" element={<MesCompetences />} />
        <Route path="/projets" element={<MesProjets />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
