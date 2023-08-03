import React from 'react';
import bullesDevImage from './requindev.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* Contenu du header avec deux colonnes */}
      <div className="bullesdev">
        <img src={bullesDevImage} alt="Les bulles du dev" />
      </div>
      <nav>
        <div className="liensnav">
          <Link to="/" relative="path">
            <p>Accueil</p>
          </Link>
          <Link to="/pageQjs" relative="path">
            <p>Qui je suis</p>
          </Link>

          <Link to="/competences" relative="path">
            <p>Mes compétences</p>
          </Link>
          <Link to="/mes_projets_realises" relative="path">
            <p>Mes projets réalisés</p>
          </Link>
          <a href="#footer">
            <p>Contact</p>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
