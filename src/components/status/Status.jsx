import clsx from 'clsx';
import './Status.css';
import { languages } from '../../data/languages';
import { getFarewellText } from '../../data/utils';

const Status = ({
  gameWon, 
  gameLost, 
  gameOver,
  lastGuess,
  wrongCount,

}) => {
  
  const getGameStats = () => {
    if (!gameOver && lastGuess) {
      const lostLangText = getFarewellText(languages[wrongCount -1].name);
      console.log("text is " + lostLangText)
       return <p>{lostLangText}</p>
    };

    if (gameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )
    } else if (gameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }
  }

  const gameStatClassName = clsx('game__status', {
      won: gameWon,
      lost: gameLost,
      farewell: !gameLost && lastGuess
  })

  return (
    <section className={gameStatClassName}>
      {getGameStats()}
    </section>
  )
}

export default Status
