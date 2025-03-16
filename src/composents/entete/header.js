import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import bullesDevImage from './logoheader.jpg';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="bullesdev">
        <img src={bullesDevImage} alt="Les bulles du dev" />
      </div>
      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      <nav className={menuOpen ? 'nav-open' : ''}>
        <div className="liensnav">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>
          <Link to="/pageQjs" onClick={() => setMenuOpen(false)}>
            Mon évolution
          </Link>
          <Link to="/competences" onClick={() => setMenuOpen(false)}>
            Mes compétences
          </Link>
          <Link to="/projets" onClick={() => setMenuOpen(false)}>
            Mes projets détaillés
          </Link>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
      {/* Ajout de la classe conditionnelle pour cacher h3mobile quand nav est ouvert */}
      <h3 className={`h3mobile ${menuOpen ? 'hidden' : ''}`}>
        Création site Front End
      </h3>
    </header>
  );
};

export default Header;
