import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
          <Link to={{ pathname: '/', hash: '#projets-section' }}>projet</Link>
          <ScrollLink to="footer" smooth={true} duration={500}>
            <p>Contact</p>
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
