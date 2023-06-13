import PropTypes from 'prop-types'
import { useState } from 'react'
import  Square  from './Square'



function Board({ xIsNext, squares, onPlay }) {
  const [winner, setWinner] = useState(null);
  //console.log(setWinner);

  const handleSquareClicked = (index) => {
    
    if (winner) { 
      console.log("winner is ", winner);
      return
    }
    
    const nextSquares = squares.slice();

    // check if we already have a value
    if (nextSquares[index] == null) {
        nextSquares[index] = xIsNext ? "X" : "O";
        onPlay(nextSquares);

      let win = calculateWinner(nextSquares);
      if (win) { 
        console.log("winner is ", win);
        setWinner(win);
      }
    } else {
      console.log("invalid placement!", nextSquares[index]);
    }

   };

  return (
    <>
        {!!winner &&
        <div>WINNER is &quot;{winner}&quot;</div>
        }
      <div className="board-row">
        <Square value={[squares[0]]} onSquareClick={ () => handleSquareClicked(0) }/>
        <Square value={[squares[1]]} onSquareClick={  () => handleSquareClicked(1) }/>
        <Square value={[squares[2]]} onSquareClick={ () =>  handleSquareClicked(2)}/>
      </div>
      <div className="board-row">
        <Square value={[squares[3]]} onSquareClick={ () =>  handleSquareClicked(3) }/>
        <Square value={[squares[4]]} onSquareClick={  () => handleSquareClicked(4) }/>
        <Square value={[squares[5]]} onSquareClick={  () => handleSquareClicked(5) }/>
      </div>
      <div className="board-row">
        <Square value={[squares[6]]} onSquareClick={ () =>  handleSquareClicked(6) }/>
        <Square value={[squares[7]]} onSquareClick={ () =>  handleSquareClicked(7) }/>
        <Square value={[squares[8]]} onSquareClick={ () =>  handleSquareClicked(8) }/>
      </div>
    </>
  );
}

Board.propTypes = {
    squares: PropTypes.array,
    xIsNext: PropTypes.bool,
    onPlay: PropTypes.func
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default Board;