import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './projets.css';

import projet1 from './projet1.png';
import projet2 from './Projet2.png';

const Projets = () => {
  const { hash, key } = useLocation();
  useEffect(() => {
    document.body.id = 'projets';
    return () => {
      document.body.id = '';
    };
  }, []);
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [key, hash]);

  return (
    <>
      <div id="projets-section">
        <div className="angry-grid">
          <div id="item-0">
            <h2>Mes projet </h2>
            <p>
              Parmi plusieurs projets réalisés lors de ma formation avec
              Openclassroom voici ci-dessous deux projets réalisé.
            </p>
          </div>
          <div id="item-1">
            <div className="projet1">
              <p className="liensduprojet">
                Voici le projet sur intégration d'une interface du site avec du
                code HTML et CSS. Regardez le projet
                <a
                  href="https://christiandu66.github.io/projet-integration-html-css/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  ici
                </a>
              </p>
              <div>
                <img src={projet1} alt="Projet1" />
              </div>
              <div className="descriptionp1">
                <div>
                  <p>
                    <strong>Description du projet</strong>
                    <br />
                    Création maquette découpage avec la structure du code HTML.
                    <br />
                    Création d'un formulaire de recherche intégré à la page
                    HTML.
                    <br />
                    Intégration de filtre de la page. <br />
                    Réalisation de cards
                    <br />
                    Mettre le site en responsive version : mobile, tablette ou
                    desktop.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Problématiques rencontrées :</strong>
                    <br />
                    <u>Responsive design</u> :Assurer que le site Web est bien
                    affiché sur différents appareils et tailles d'écran, tels
                    que smartphones, tablettes et ordinateurs de bureau. <br />
                    <u>Positionnement des éléments </u>: Aligner et positionner
                    correctement les éléments sur la page à l'aide de CSS peut
                    être délicat. J'ai dû m'assuré que tout est bien organisé et
                    esthétiquement agréable. <br />
                    <u>Optimisation des images </u>
                    : Vérification des tailles et la résolution de vos images
                    pour assurer un temps de chargement rapide du site sans
                    sacrifier la qualité visuelle. <br />
                    <u>Accessibilité</u>
                    : S'Assurer que le site Web est accessible aux personnes
                    handicapées en utilisant des balises sémantiques appropriées
                    et en respectant les bonnes pratiques d'accessibilité.
                    <br /> <u>Gestion des couleurs</u> : Choisir judicieusement
                    les couleurs utilisées sur le site pour assurer une
                    lisibilité optimale et éviter les problèmes d'accessibilité
                    liés aux contrastes.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Compétences développées :</strong> <br />{' '}
                    <u>HTML</u> : Amélioration de vos compétences en HTML en
                    structurant correctement le contenu de la page à l'aide de
                    balises sémantiques. <br /> <u>CSS </u>: Renforcement de mes
                    compétences en CSS en stylisant les éléments, en gérant les
                    mises en page, les couleurs et en créant des animations ou
                    des effets si nécessaire. <br /> <u>Responsive design</u> :
                    Apprendre à rendre mon site Web réactif en utilisant les
                    médias requêtes pour ajuster les styles en fonction de la
                    taille de l'écran. <br />
                    <u>Gestion de fichiers et de dossiers </u> : Apprendre à
                    organiser et à gérer efficacement les fichiers et les
                    dossiers pour un projet Web.
                    <br />
                    <u>Versionnement avec Git et GitHub </u>: Acquérir des
                    compétences dans l'utilisation de Git pour gérer les
                    versions de votre code et les envoyer sur GitHub pour le
                    suivi des modifications et la collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="item-2">
            <div className="projet1">
              <p className="liensduprojet">
                Voici le projet sur le Débuggage et optimisation un site de photographe. Regardez le projet.
                <a
                  href="https://christiandu66.github.io/Debuggage_et_optimisation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  ici
                </a>
              </p>
              <div>
                <img src={projet2} alt="Projet2" />
              </div>
              <div className=" descriptionp1">
                <div>
                  <p>
                    <strong>Description du projet</strong>
                    <br />
                    Réalisation d'une première analyse du code avec Lighthouse
                    <br />
                    Otenir un rapport Lighthouse au vert sur la partie
                    Performances (note supérieure ou égale à 90 %).
                    <br />
                    Rédaction du rapport d'intervention, avec les modifications
                    effectuées et leur impact sur les performances. <br />
                    Obtention d'un rapport Lighthouse au vert sur la partie SEO
                    (note supérieure ou égale à 90 %).
                    <br />
                    Obtention d'un rapport de Rich Snippet Google avec les
                    informations du client. <br />
                    Mise en place de balises meta liées aux principaux réseaux
                    sociaux, comme les metas OpenGraph pour Facebook, et les
                    Twitter Cards.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Problématiques rencontrées :</strong> <br />
                    <u>Optimisation des performances </u>: Améliorer les
                    performances du site en réduisant les temps de chargement
                    des pages, en optimisant les images, en minifiant les
                    fichiers CSS et JavaScript, etc.
                    <br /> <u>SEO (Search Engine Optimization)</u> : Travailler
                    sur le référencement du site pour qu'il soit mieux
                    positionné dans les résultats des moteurs de recherche. Cela
                    inclut l'utilisation de bonnes pratiques de structuration du
                    contenu, de balises appropriées, de mots-clés pertinents,
                    etc
                    <br />
                    <u>Référencement local avec Schema.org</u>: Mettre en place
                    le référencement local en utilisant le balisage Schema.org
                    pour permettre aux moteurs de recherche de mieux comprendre
                    les informations géographiques et de localisation de
                    l'entreprise ou du site. <br />
                    <u>Méta-tags pour les réseaux sociaux</u>: Ajouter les
                    méta-tags appropriés pour les réseaux sociaux afin que le
                    contenu du site soit correctement partagé et affiché
                    lorsqu'il est partagé sur des plateformes sociales. <br />
                    <u>Accessibilité </u>
                    : Faire en sorte que le site soit accessible à tous les
                    utilisateurs, y compris ceux ayant des handicaps visuels,
                    auditifs, cognitifs, etc. Cela implique d'utiliser des
                    balises sémantiques, de fournir des descriptions
                    alternatives pour les images, etc.
                    <br /> <u>Correction de bugs</u> : Identifier et corriger
                    les problèmes spécifiques signalés, tels que la navigation
                    dans la modale de la galerie et l'affichage correct des
                    catégories sélectionnées dans le filtre.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Compétences développées :</strong>{' '}
                    <u>Performance web </u>: Apprendre à optimiser le chargement
                    du site pour une meilleure expérience utilisateur. <br />
                    <u>SEO et balisage Schema.org</u>: Acquérir des compétences
                    en référencement et en utilisation du balisage Schema.org
                    pour améliorer la visibilité du site sur les moteurs de
                    recherche. <br />
                    <u>Méta-tags pour les réseaux sociaux</u>
                    : Comprendre comment utiliser les méta-tags pour contrôler
                    les aperçus partagés sur les réseaux sociaux. <br />
                    <u>Accessibilité web </u>
                    : Se familiariser avec les directives et les bonnes
                    pratiques pour rendre le site accessible à tous. <br />
                    <u>Débogage et résolution de problèmes</u>: Améliorer vos
                    compétences en débogage pour identifier et corriger les
                    problèmes spécifiques rencontrés sur le site. <br />
                    <u>Rédaction d'un rapport d'optimisation</u>: Apprendre à
                    documenter vos actions d'optimisation et à évaluer leur
                    impact sur le site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projets;
