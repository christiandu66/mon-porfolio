import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
  const { hash, key } = useLocation();

  useEffect(() => {
    document.body.id = 'home';
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

  const [typedText, setTypedText] = useState('');
  const fullText = 'Deeveloppeur Front End Christian Caron ';
  const typingSpeed = 75;

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
          <p>
            Donnez Vie à Vos Idées avec un Site Web Moderne et Performant !
            <div className="puces">
              <p>
                <br /> 🔹 Vous voulez un site rapide, design et optimisé ?<br />
                🔹 Besoin d'une interface fluide et engageante pour vos
                utilisateurs ?<br />
                🔹 Vous avez un projet en tête ? Parlons-en !
              </p>
            </div>
            <br /> Contactez-moi dès aujourd'hui et donnons ensemble une
            nouvelle dimension à votre présence en ligne !
            <h2 className="monh2">A propos de moi :</h2>
            <br /> Je suis Christian Caron, développeur front-end passionné,
            spécialisé dans la création d'expériences digitales modernes et
            performantes. Après une carrière dans la logistique, j'ai transformé
            ma passion en métier en me formant chez OpenClassrooms, où j'ai
            validé tous mes projets avec succès. Aujourd'hui, je mets mes
            compétences au service de vos besoins !
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
