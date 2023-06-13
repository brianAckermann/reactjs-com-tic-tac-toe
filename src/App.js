import PropTypes from 'prop-types'
import { useState } from 'react'


const Square = ({ value, onSquareClick }) => {

  //console.log(value);
  //const [value, setValue] = useState("");

/*   const handleClick = () => { 
    console.log("%cSquare Clicked!", "color: green");
    //setValue("X");
  }; */

  return (
    <button className="square" onClick={ onSquareClick }>{ value }</button>
  );
 }

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
}


function Board() {

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
      setXIsNext(!xIsNext);
      setSquares(nextSquares);

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
  //value: PropTypes.string,
  //onSquareClick: PropTypes.func,
}

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
          <ol>{/*TODOzz*/}</ol>
        </div>
     </div>
    </>

  );

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



export default Game;