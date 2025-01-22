import './App.css';
import { Header, Status, Languages, Word } from './components';
import { useState } from 'react';

const App = () => {
  // state value
  const [currentWord, setCurrentWord] = useState('react');

  // letter
  const letterElements = [...currentWord].map((letter, index) => {
    return (
      <span key={index}
            className='letter'>
        {letter.toLocaleUpperCase()}
      </span>
    )
  })

  return (
    <main>
      <Header />
      <Status />
      <Languages />
      <Word letterElements={letterElements}/>
    </main>
  )
}

export default App
