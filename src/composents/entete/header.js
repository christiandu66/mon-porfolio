import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import bullesDevImage from './requindev.png';

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
            <p>Mes projets détaillés</p>
          </Link>

          <Link to={{ pathname: '/', hash: '#contact' }}>
            <p>Contact</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
