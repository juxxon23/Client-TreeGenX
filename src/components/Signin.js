import { Fragment, useState } from 'react';
import Button from './Button';

const Signin = () => {
  const [userData, setUserData] = useState({
    email: '',
    userpass: '',
    userId: '',
    username: '',
    lastname: '',
    dateBirth: '',
  })

  const userSignin = (e) => {
    e.preventDefault();
    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
      };
      fetch('http://localhost:3600/user', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
  }

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    })
  }

  return (
    <Fragment>
      <div className="signin-cont2">
        <div className="form-cont">
          <form className="signin-form" onSubmit={userSignin}>
            <div className="signin-flex">
              <div className="signin-gr1">
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
                <label className="form-lbl">
                  ID <br/>
                  <input className="form-inp" type="text" onChange={handleInputChange} name="userId"/>
                </label>
                <br/>
              </div>
              <div className="signin-gr2">
                <label className="form-lbl">
                  Name <br/>
                  <input className="form-inp" type="text" onChange={handleInputChange} name="username"/>
                </label>
                <br/>
                <label className="form-lbl">
                  Lastname <br/>
                  <input className="form-inp" type="text" onChange={handleInputChange} name="lastname"/>
                </label>
                <br/>
                <label className="form-lbl">
                  Date of Birth <br/>
                  <input className="form-inp" type="date" onChange={handleInputChange} name="dateBirth"/>
                </label>
                <br/>
              </div>
            </div>
            <br/>
            <Button classNa="form-btn" text="Signin" backgColor="#2a2834" color="#dbd9e2" type="submit"/>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Signin;
