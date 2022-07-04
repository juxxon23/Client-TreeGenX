import PropTypes from 'prop-types';

const Button = ({classNa, text, color, backgColor, onClick}) => {
// onClick={onClick}
  return (
    <button
      className= {classNa}
      style={{backgroundColor: backgColor, color: color}}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  //color: 'yellow',
  text: 'Boat',
}

Button.propTypes = {
  //color: PropTypes.string,
  text: PropTypes.string.isRequired,
  //onClick: PropTypes.func,
}

export default Button;

/*
<Button color='crimson' text='Hit!' onClick={onClick}/>

const onClick = (e) => {
  console.log('Tap', e);
}
*/
