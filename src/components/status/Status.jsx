import clsx from 'clsx';
import './Status.css';

const Status = ({
  gameWon, 
  gameLost, 
  gameOver

}) => {

  const getGameStats = () => {
    if (!gameOver) return null;

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
  })

  return (
    <section className={gameStatClassName}>
      {getGameStats()}
    </section>
  )
}

export default Status
