import PropTypes from 'prop-types'
import { useState } from 'react'

import  Board from './Board'

const Game = () => {
  
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    
    const currentSquares = history[currentMove];


    const handlePlay = (nextSquares) => { 
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);  /// state updates cause host component to reload
        setCurrentMove(nextHistory.length - 1);
    }

    const jumpTo = (nextMove) => { 
        console.log("jump to move ", nextMove);
        setCurrentMove(nextMove);   /// state updates cause host component to reload
    }

    const moves = history.map((squares, moveNum) => { 
        let description;
        if (moveNum > 0) {
            description = "Go to move #" + moveNum;
        } else { 
            description = "Go to game start";
        }

        return (
            <li key={moveNum}>
                <button onClick={() => jumpTo(moveNum)}>{ description }</button>
            </li>
        );
    });
  
    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        </>

    );

}


export default Game;

