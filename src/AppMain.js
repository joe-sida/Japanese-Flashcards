import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Flashcard from './Flashcard';
import LearnedFlashcards from './LearnedFlashcards';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebaseConfig from './firebase';

import { initializeApp } from 'firebase/app';

import './App.css';
import './card.css';

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flashcards, setFlashcards] = useState([]);
  const [learnedFlashcards, setLearnedFlashcards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('words.json');
        const data = await response.json();
        setFlashcards(data.words);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Initialize Firebase app
    initializeApp(firebaseConfig);
  }, []);

  const handleNextCard = () => {
    const randomCard = Math.floor(Math.random() * flashcards.length);
    setCurrentCard(randomCard);
  };

  const handleLearnCard = async () => {
    const currentFlashcard = flashcards[currentCard];
    setLearnedFlashcards((prevLearnedFlashcards) => [...prevLearnedFlashcards, currentFlashcard]);
    handleNextCard();

    // Store learned flashcard in Firebase
    const db = getFirestore();
    await addDoc(collection(db, 'cards'), currentFlashcard);

    // Remove learned flashcard from the list of flashcards
    const updatedFlashcards = flashcards.filter((flashcard) => flashcard !== currentFlashcard);
    setFlashcards(updatedFlashcards);
  };

  return (
    <Router>
      <div className="app">
        <h1>ジョーのフラッシュカード</h1>
        <h4>Jō no furasshukādo</h4>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                flashcards={flashcards}
                currentCard={currentCard}
                handleNextCard={handleNextCard}
                handleLearnCard={handleLearnCard}
              />
            }
          />
          <Route path="/learned-flashcards" element={<LearnedFlashcards learnedFlashcards={learnedFlashcards} />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = ({ flashcards, currentCard, handleNextCard, handleLearnCard }) => {
  return (
    <>
      {flashcards.length > 0 ? (
        <>
          <Flashcard word={flashcards[currentCard]} />
          <div className="btn-container">
  <div className="row">
    <button className="btn" onClick={handleLearnCard}>
      Learn Card
    </button>
    <button className="btn" onClick={handleNextCard}>
      Next Card
    </button>
  </div>
  <div className="center">
    <Link to="/learned-flashcards" className="btn" id="3-btn">
      View Learned Flashcards
    </Link>
  </div>
</div>

        </>
      ) : (
        <div>Loading flashcards...</div>
      )}
    </>
  );
};

export default App;
