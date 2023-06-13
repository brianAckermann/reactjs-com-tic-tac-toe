import PropTypes from 'prop-types'
import { useState } from 'react'

import  Board from './Board'

// game logice will happen here, eventually
const Game = () => {
  
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [winner, setWinner] = useState(null);
    
    const currentSquares = history[history.length - 1];

    const handlePlay = (nextSquares) => { 
        setXIsNext(!xIsNext);
        setHistory([...history, nextSquares]);
    }

  
    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
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

