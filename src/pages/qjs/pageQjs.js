import React from 'react';

import './qui_je_suis.css';

import qjsImage from './qjs.jpeg';

function PageQjs() {
  return (
    <div>
      <div className="qjscontenair">
        <main className="presentation">
          <div>
            <h1 className="monh1">Mes Forces</h1>
            <p className="monp">
              Bonne maîtrise du HTML pour la structuration du contenu des pages
              web.
              <br /> Bonne maîtrise du CSS pour la mise en forme et le stylisme
              des pages web.
              <br />
              Capacité à créer des mises en page simples et responsives.
              <br />
              Connaissances de base des concepts du développement web.
              <br /> Enthousiasme et motivation pour apprendre davantage sur le
              développement front-end.
            </p>
            <h1 className="monh1">Mes Faiblesses </h1>
            <p className="monp">
              Pas d'expérience dans le développement de projets web complexes.{' '}
              <br />
              Besoin de renforcer mes compétences en résolution de problèmes
              liés au développement web. <br />
              Manque d'expérience pratique dans la création de projets front-end
              complexes et de grande envergure.
              <br />
              Besoin d'améliorer les concepts de base du back-end tels que la
              création de serveurs, la gestion des bases de données et la
              création d'API.
            </p>
          </div>

          <div className="imgqjs">
            <img src={qjsImage} alt="Quelque chose" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default PageQjs;
