import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../assests/logo.png";
const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img className="logo" src={logo} alt="Care Vault logo"></img>
      </NavLink>
      <nav className="Nav">
        <ul>
          <li>
            <NavLink to="/about"><button className="ab">About us</button></NavLink>
          </li>
          <li>
            <NavLink to="/helpdesk"><button className="hd">Help Desk</button></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
