import clsx from 'clsx';
import './Keyboard.css';

const Keyboard = ({
  alphabets,
  currentWord,
  guessedLetters,
  gameOver,
  addGuess,
 
}) => {

  const keyboardElements = [...alphabets].map(letter => {
    const isInside = [...currentWord].includes(letter) && [...guessedLetters].includes(letter);
    const isNotInside = [...guessedLetters].includes(letter) && ![...currentWord].includes(letter);

    const btnClassName = clsx({
      right: isInside,
      wrong: isNotInside,
      keyOff: gameOver,
    })

    return (
      <button key={letter}
              type='button'
              className={btnClassName}
              onClick={() => addGuess(letter)}
              disabled={gameOver}
              aria-label={`letter ${letter}`}
              aria-disabled={guessedLetters.includes(letter)}>
        {letter.toUpperCase()}
      </button>
    )
  })

  return (
    <section className='keyboard'>
        {keyboardElements}
    </section>
  )
}

export default Keyboard
