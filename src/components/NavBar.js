import { RiHomeSmileFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <nav style={{float:'right'}}>
      <Link to="/home">
        <RiHomeSmileFill className="homeBtn"/>
      </Link>
    </nav>
  )
}

export default NavBar;
