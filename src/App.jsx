import './App.css';
import { Header, Status, Languages, Word, Keyboard } from './components';
import { useState } from 'react';
import clsx from 'clsx';

const App = () => {
  // state value
  const [currentWord, setCurrentWord] = useState('react');
  const [guessedLetters, setGuessedLetter] = useState([]);

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

  // letter
  const letterElements = [...currentWord].map((letter, index) => {

    return (
      <span key={index}
            className='letter'>
        {letter.toLocaleUpperCase()}
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
    </main>
  )
}

export default App
