import React from 'react';
import bullesDevImage from './requindev.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="bullesdev">
        <img src={bullesDevImage} alt="Les bulles du dev" />
      </div>
      <nav>
        <div className="liensnav">
          <Link to="/" relative="path">
            <p>Accueil</p>
          </Link>
          <Link to="/pageQjs" relative="path">
            <p>Mon évolution</p>
          </Link>

          <Link to="/competences" relative="path">
            <p>Mes compétences</p>
          </Link>
          <Link to="/projets" relative="path">
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
