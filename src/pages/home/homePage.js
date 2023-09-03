import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './homePage.css';

import projet1 from './projet1.png';
import projet2 from './Projet2.png';

const HomePage = () => {
  const { hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [key, hash]);

  const [typedText, setTypedText] = useState('');
  const fullText = 'Deeveloppeur Front End Christian Caron '; // Remplacez par le texte que vous souhaitez afficher progressivement
  const typingSpeed = 75; // Ajustez la vitesse de frappe ici

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prevText) => prevText + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [fullText]);
  return (
    <>
      <div className="container">
        <h1>{typedText}</h1>

        <div className="presentationmoi">
          <h2 className="monh2">Qui je suis :</h2>
          <p>
            Je viens de finir suis ma formation avec l'organisme d'Openclassroom
            en tant que développeur web.
            <br /> J’ai réussi tous les projets de cette formation et je suis en
            attente de la décision du jury final pour la délibération de mon
            diplôme de développeur web.
            <br /> Ayant travaillé essentiellement dans la logistique, je me
            suis reconverti dans la programmation, langage de développement.
            <br /> Passionné depuis mon adolescence par le langage et le
            développement, je désire aujourd’hui en faire mon métier.
            <br /> Je souhaite exercer vers le développement front-end.
          </p>
        </div>
      </div>
      <div id="projets-section">
        <div className="angry-grid">
          <div id="item-0">
            <p>
              Parmi plusieurs projets réalisés lors de ma formation avec
              Openclassroom voici ci-dessous deux projets réalisé.
            </p>
          </div>
          <div id="item-1">
            <div className="projet1">
              <p className="liensduprojet">
                Voici le projet sur intégration d'une interface du site avec du
                code HTML et CSS. Vous pouvez voir le projet
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
              </div>
            </div>
          </div>
          <div id="item-2">
            <div className="projet1">
              <p className="liensduprojet">
                Débuggage et optimisation un site de photographe. Vous pouvez
                voir le projet.
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
              <div className=" descriptionp2">
                <div>
                  <p>
                    <strong>Description du projet</strong>
                    <br />
                    Réalisation d'une première analyse du code avec Lighthouse
                    <br />
                    Otenir un rapport Lighthouse au vert sur la partie
                    Performances (note supérieure ou égale à 90 %).
                    <br />
                    Rédaction du rapport d’intervention, avec les modifications
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
              </div>{' '}
            </div>
          </div>{' '}
          <div id="contact" class="contact-section">
            <div class="contact-form-container">
              <form id="contact-form">
                <h2>Contactez-moi</h2>
                <label htmlFor="name">Nom :</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message :</label>
                <textarea id="message" name="message" rows="4" required />
                <button type="submit">Envoyer</button>
              </form>
            </div>
            <div class="contact-info">
              <p>
                Contact Christian Caron <br />
                26 rue des templiers
                <br />
                75000 Paris
                <br />
                <br />
                <br />
                Tel: 06-79-24-32-25 <br />
                Mail: requindudev@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
