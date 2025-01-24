import './App.css';
import { Header, Status, Languages, Word, Keyboard, NewGame } from './components';
import { useState } from 'react';
import { languages } from './data/languages';

const App = () => {
  // state value
  const [currentWord, setCurrentWord] = useState('react');
  const [guessedLetters, setGuessedLetter] = useState([]);

  // derived value
  const wrongGuessedCount = guessedLetters.filter(letter => (
    !currentWord.includes(letter)
  )).length;

  const isGameWon = [...currentWord].every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuessedCount >= languages.length -1;
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length -1]
  const incorrectLastGuess = lastGuessedLetter && ![...currentWord].includes(lastGuessedLetter)
  

  // static value
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  // save the guessed letters into a state
  const addGuessLetter = (letter) => {
    setGuessedLetter(prevGuessed => (
      prevGuessed.includes(letter) 
        ? prevGuessed
        : [...prevGuessed, letter]          
    ))
  }

  // start new game
  const startNewGame = () => {
    setCurrentWord('react');
    setGuessedLetter([]);
  }

  return (
    <main>
      <Header />
      <Status gameWon={isGameWon}
              gameLost={isGameLost}
              gameOver={isGameOver}
              lastGuess={incorrectLastGuess}
              wrongCount={wrongGuessedCount}
              guessed={guessedLetters}/>
      <Languages guessCount={wrongGuessedCount}/>
      <Word word={currentWord}
            guessed={guessedLetters}
            gameLost={isGameLost}/>
      <Keyboard alphabets={alphabets}
                currentWord={currentWord}
                guessedLetters={guessedLetters}
                gameOver={isGameOver}
                addGuess={addGuessLetter}/>
      {isGameOver ? <NewGame  newGame={startNewGame}/> : null}
    </main>
  )
}

export default App
