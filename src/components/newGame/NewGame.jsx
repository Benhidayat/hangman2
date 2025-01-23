import './NewGame.css';

const NewGame = ({ newGame }) => {
  return (
    <button className='new__game'
            onClick={newGame}>
        New Game
    </button>
  )
}

export default NewGame
