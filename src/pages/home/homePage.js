import React from 'react';
import './homePage.css';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1>Developpeur Christian Dupont</h1>

        <div className="presentationmoi">
          <h2 className="monh2">Qui je suis :</h2>
          Je suis actuellement étudiant en formation avec l'organisme
          d'Openclassroom en tant que développeur web.
          <br /> Je suis actuellement sur mon dernier projet avant délibération
          de mon diplôme de développeur web.
          <br /> Ayant travaillé essentiellement dans la logistique, je me suis
          reconverti dans la programmation, langage de développement.
          <br /> Passionné depuis mon adolescence par le langage et le
          développement, je désire aujourd’hui en faire mon métier.
          <br /> Je souhaite exercer vers le développement front-end.
        </div>
      </div>
    </>
  );
};

export default HomePage;
