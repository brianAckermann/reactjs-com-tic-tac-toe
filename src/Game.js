import PropTypes from 'prop-types'
import { useState } from 'react'

import  Board from './Board'

// game logice will happen here, eventually
const Game = () => {
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  
  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          {!!winner &&
            <div>WINNER is &quot;{winner}&quot;</div>
          }
          <ol>{/*TODOzz*/}</ol>
        </div>
     </div>
    </>

  );

}


export default Game;

