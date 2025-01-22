import './App.css';
import { Header, Status, Languages, Word, Keyboard } from './components';
import { useState } from 'react';

const App = () => {
  // state value
  const [currentWord, setCurrentWord] = useState('react');

  // static value
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

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
    return (
      <button key={letter}>
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
