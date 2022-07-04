import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const Login = () => {

  const [userLogin, setUserLogin] = useState({
    email: '',
    userpass: ''
  })

  const verifyLogin = (e) => {
    e.preventDefault();
    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userLogin)
      };
      fetch('http://localhost:3600/auth', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
  }

  const handleInputChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name] : e.target.value
    })
  }

  return (
    <Fragment>
      <div className="login-cont2">
        <div className="form-cont">
          <form className="login-form" onSubmit={verifyLogin}>
            <label className="form-lbl">
              Email <br/>
              <input className="form-inp" type="text" onChange={handleInputChange} name="email"/>
            </label>
            <br/>
            <label className="form-lbl">
              Password <br/>
              <input className="form-inp" type="password" onChange={handleInputChange} name="userpass"/>
            </label>
            <br/>
            <Button classNa="form-btn" text="Login" backgColor="#2a2834" color="#dbd9e2" type="submit"/>
          </form>
          <span className="signup-msg">You are not inside?</span> &nbsp;
          <Link to="/signin" className="signup-lnk">
            Sign up!
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Login;
