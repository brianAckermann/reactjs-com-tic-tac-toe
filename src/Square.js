import PropTypes from 'prop-types'



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

export default Square;