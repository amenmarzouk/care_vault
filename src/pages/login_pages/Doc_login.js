import React from "react";
import Header from "../../components/header";
import  '../../style/doc_login.css';
import  '../../style/loginforms.css';

const DocLogin = () => {
  return (
    <div className="doclogin">
      <Header />
      <div className="center">
        <h1>Doctor | Login</h1>
        <form>
          <div className="write">
            <input type="text" required></input>
            <span></span>
            <label>username</label>
          </div>
          <div className="write">
            <input type="password" required></input>
            <span></span>
            <label>Password</label>
          </div>

          <input type="submit" value="Login"></input>
          <div className="not">Not a member ? <a href="/docsignup"> Sign Up</a> </div>
        </form>
      </div>
    </div>
  );
};

export default DocLogin;
