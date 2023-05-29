import React from 'react';
import './card.css';
import './LearnedFlashcards';

const Flashcard = ({ word }) => {
  return (
    <div className="flashcard">
      <h2>{word.Kanji}</h2>
      <p>Hiragana: {word.hiragana}</p>
      <p>Type: {word.type}</p>
      <p>Meaning: {word.Meaning}</p>
    </div>
  );
};

export default Flashcard;
