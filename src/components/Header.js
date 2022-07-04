import PropTypes from 'prop-types';

import NavBar from './NavBar';

const Header = ({title}) => {
  return(
    <header className="Header">
        <h1>
        {title}
        <NavBar />
        </h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'TreeGenX',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS en JS
/*
const headingStyle = {
  color: 'violet',
  backgroundColor: 'aquamarine',
  border: '20px solid black',
}

<a
  className="App-link"
  href=""
  target="_blank"
  rel="noopener noreferrer" disabled>
  OUT
</a>
*/
export default Header;
