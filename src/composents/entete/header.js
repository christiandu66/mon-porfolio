import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <svg
          width="160"
          height="160"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
        >
          {/* Fond du logo */}
          <circle cx="30" cy="30" r="28" fill="#575558" className="logo-bg" />

          {/* Éléments de code */}
          <path
            d="M20 20h20M20 30h15M20 40h25"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            className="code-lines"
          />

          {/* Chevrons */}
          <path
            d="M45 20l5 5-5 5M45 30l5 5-5 5"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            className="code-chevrons"
          />

          {/* Accolades */}
          <path
            d="M15 20c0-2 2-3 4-3M15 40c0 2 2 3 4 3"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            className="code-braces"
          />

          {/* Cercle extérieur animé */}
          <circle
            cx="30"
            cy="30"
            r="26"
            stroke="#ffffff"
            strokeWidth="1"
            fill="none"
            className="outer-ring"
          />
        </svg>
        <div className="logo-text-container">
          <span className="logo-text">Dev</span>
          <span className="logo-text-accent">Web</span>
        </div>
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
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
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
