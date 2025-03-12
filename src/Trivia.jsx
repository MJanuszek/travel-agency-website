import "./style/Sudety.scss";
import React, { useState } from "react";
import trivia from "./infoTriviaTxt";

const Trivia = function () {
  const [mytrivia, setNewStory] = useState("Kliknij żeby się dowiedzieć");

  const getNewTrivia = () => {
    const randomIndex = Math.floor(Math.random() * trivia.length); // Losowanie indeksu
    setNewStory(trivia[randomIndex].txt01); // Ustawienie nowej ciekawostki
  };

  return (
    <div className="trivia">
      <button className="trivia-btn" onClick={getNewTrivia}>
        Losuj Trivia
      </button>
      <p className="story trivia-story">{mytrivia}</p>
    </div>
  );
};

export default Trivia;
