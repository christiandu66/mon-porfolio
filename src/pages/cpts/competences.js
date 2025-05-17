import React, { useEffect } from 'react';
import './competences.css';

function Grid() {
  useEffect(() => {
    document.body.id = 'cpts';
    return () => {
      document.body.id = '';
    };
  }, []);

  return (
    <>
      <main className="competences">
        <p className="title">Mes competences</p>
        <div className="grid-container">
          {/* Pavé 1 */}
          <div className="pave">
            Construction un site web responsive et dynamique s'adaptant à tout
            type d'écran grâce à l'intégration des éléments des maquettes
            graphiques (développement front-end avec HTML, CSS, JavaScript et
            React)
          </div>
          {/* Pavé 2 */}
          <div className="pave">
            Crée des API et des bases de données pour développer des sites
            complets et dynamiques et assurer le bon fonctionnement côté serveur
            (développement back-end avec NodeJS, Express et MongoDB).{' '}
          </div>
          {/* Pavé 3 */}
          <div className="pave">
            Optimiser les performances et réaliser la maintenance de sites web
            déjà existants pour permettre leur fonctionnement optimal et une
            bonne visibilité sur les moteurs de recherche (SEO).
          </div>
          {/* Pavé 4 */}
          <div className="pave">
            Gére un projet web de A à Z : de la planification du projet à la
            présentation de la solution au client, en passant par la rédaction
            des spécifications techniques.
          </div>
          {/* Pavé 5 */}
          <div className="pave">
            {' '}
            Utilise les technologies et les langages techniques les plus
            demandés : HTML, CSS, JavaScript, React, Git/GitHub, NodeJS,
            Express, MongoDB, les API REST
          </div>
          {/* Pavé 6 */}
          <div className="pave">
            <a href="./mon_cv.pdf" target="_blank" rel="noopener noreferrer">
              Télécharger Mon CV (PDF)
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Grid;
