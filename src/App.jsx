import './App.css';
import { Header, Status, Languages, Word, Keyboard, NewGame } from './components';
import { useState } from 'react';
import clsx from 'clsx';
import { languages } from './data/languages';

const App = () => {
  // state value
  const [currentWord, setCurrentWord] = useState('react');
  const [guessedLetters, setGuessedLetter] = useState([]);

  // derived value
  const wrongGuessedCount = guessedLetters.filter(letter => (
    !currentWord.includes(letter)
  )).length;

  const isGameWon = [...currentWord].every(letter => {
    return guessedLetters.includes(letter);
  })

  const isGameLost = wrongGuessedCount >= languages.length -1;
  const isGameOver = isGameWon || isGameLost

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

  // letter
  const letterElements = [...currentWord].map((letter, index) => {
    
    return (
      <span key={index}
            className='letter'>
        {guessedLetters.includes(letter) ? letter.toLocaleUpperCase() :''}
      </span>
    )
  })

  // keyboard
  const keyboardElements = [...alphabets].map(letter => {
    const isInside = [...currentWord].includes(letter) && guessedLetters.includes(letter);
    const isNotInside = guessedLetters.includes(letter) && ![...currentWord].includes(letter);

    const className = clsx({
      right: isInside,
      wrong: isNotInside
    })
    return (
      <button key={letter}
              type='button'
              className={className}
              onClick={() => addGuessLetter(letter)}>
        {letter.toLocaleUpperCase()}
      </button>
    )
  })

  return (
    <main>
      <Header />
      <Status />
      <Languages />
      <Word letterElements={letterElements}/>
      <Keyboard keyboardElms={keyboardElements}/>
      {isGameOver ? <NewGame  newGame={startNewGame}/> : null}
    </main>
  )
}

export default App
