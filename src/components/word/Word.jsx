import clsx from 'clsx';
import './Word.css';

const Word = ({word, guessed, gameLost}) => {
  const letterElements = [...word].map((letter, index) => {
    const shouldShowLetters = gameLost || [...guessed].includes(letter);
    
    const letterClassName = clsx('letter', {
      correct: guessed.includes(letter),
      incorrect: gameLost && !guessed.includes(letter)
    })

    return (
      <span key={index}
            className={letterClassName}>
        {shouldShowLetters ? letter.toUpperCase() : ''}
      </span>
    )
  })
  return (
    <section className='word'>
      {letterElements}
    </section>
  )
}

export default Word
