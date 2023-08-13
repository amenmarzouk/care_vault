import React from 'react';
import Header from "../../components/header";
import  '../../style/guest_login.css';
import  '../../style/loginforms.css';
const GuestLogin = () => {
    return (
        <div className='guestlogin'>
            <Header />
            <div className="center">
        <h1>Guest | Login</h1>
        <form>
          <div className="write">
            <input type="text" required></input>
            <span></span>
            <label>Username</label>
          </div>
          <div className="write">
            <input type="email" required></input>
            <span></span>
            <label>E-mail</label>
          </div>

          <input type="submit" value="Login"></input>
          <div className="not">Not a member ? <a href="/docsignup"> Sign Up</a> </div>
        </form>
      </div>
        </div>
    );
}

export default GuestLogin;
