import React from "react";
import "./App.css";
import NextEvent from "./components/NextEvent/NextEvent";

function App() {
  return (
    <div className="App">
      <div className="ourStory">
        <h2>Notre histoire</h2>
        <p>
          Band'Ankh, c'est l'alliance de 6 personnalités aux influences diverses
          ! <br />
          Basée sur un son Punk Rock, la musique de Band'Ankh n'hésite pas à
          s'aventurer vers le Rock'n'Roll, le Blues, le Reggae et même une
          touche de Flamenco. <br />
          Les textes se veulent à la fois engagés, désabusés, second degré, ou
          alors totalement loufoques. Ajoutez à cela une présence scénique à
          l'image de la musique et vous obtenez alors le cocktail que Band'Ankh
          veut partager avec son public:
          <br />
          *Un vrai moment de bonne humeur et d'Amusement !*
        </p>
      </div>
      <NextEvent />
    </div>
  );
}

export default App;
