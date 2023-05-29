import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './card.css';



const LearnedFlashcards = () => {
    const [learnedFlashcards, setLearnedFlashcards] = useState([]);
  
    useEffect(() => {
      const fetchLearnedFlashcards = async () => {
        const db = getFirestore();
        const cardsCollection = collection(db, 'cards');
        const querySnapshot = await getDocs(cardsCollection);
        const learnedCards = querySnapshot.docs.map((doc) => doc.data());
        setLearnedFlashcards(learnedCards);
      };
  
      fetchLearnedFlashcards();
    }, []);

  return (
    <div className='Learned_cards'>
      <h2>Learned Flashcards</h2>
      {learnedFlashcards.length > 0 ? (
        <ul>
          {learnedFlashcards.map((flashcard, index) => (
            <li key={index}>
              <div>Kanji: {flashcard.Kanji}</div>
              <div>Hiragana: {flashcard.hiragana}</div>
              <div>Type: {flashcard.type}</div>
              <div>Meaning: {flashcard.Meaning}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No learned flashcards yet.</div>
      )}
    </div>
  );
};

export default LearnedFlashcards;
