import React from 'react';
import './qui_je_suis.css'; // Importer le fichier CSS local si nécessaire

import qjsImage from './qjs.jpeg';

// Ajoutez le mot-clé "function" pour déclarer correctement la fonction
function QuiJeSuis() {
  return (
    <div>
      <main>
        <div className="presentation">
          Je suis actuellement étudiant en formation avec l'organisme
          d'Openclassroom en tant que développeur web.
          <br />
          <br /> Je suis actuellement sur mon dernier projet avant délibération
          de mon diplôme de développeur web.
          <br />
          <br /> Ayant travaillé essentiellement dans la logistique, je me suis
          reconverti dans la programmation, langage de développement.
          <br />
          <br /> Passionné depuis mon adolescence par le langage et le
          développement, je désire aujourd’hui en faire mon métier.
          <br />
          <br /> Je souhaite exercer vers le développement front-end.
        </div>
        <div className="imgqjs">
          <img src={qjsImage} alt="Quelque chose" />
        </div>
      </main>
    </div>
  );
}

export default QuiJeSuis; // N'oubliez pas d'exporter la fonction
