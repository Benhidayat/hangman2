import './Word.css';

const Word = ({word, guessed}) => {
  const letterElements = [...word].map((letter, index) => {
    return (
      <span key={index}
            className='letter'>
        {[...guessed].includes(letter) ? letter.toUpperCase() : ''}
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
