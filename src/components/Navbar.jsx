import React from "react";
import logo from "../images/logo.png";

import GetSignedInEmail from "../../pages/SignInCheck.jsx";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const check = GetSignedInEmail();
    if (check){
      return (
        <nav>
          <div className = "nav--div">
            <img src={logo} className="nav--logo" />
            <div className="nav--components"> 
              <Link to = "/"> HOME </Link>
              <Link to = "/toOrder"> TO ORDER </Link>
              <Link to = "/logout"> LOG OUT </Link>
            </div>
          </div>
        </nav>
      )
    } else{
    return (
        <nav>
          <div className="nav--div"> 
            <img src={logo} className="nav--logo" />
            <div className="nav--components"> 
              <Link to = "/"> HOME </Link>
              <Link to = "/toOrder"> TO ORDER </Link>
              <Link to = "/signup"> SIGN UP </Link>
              <Link to = "/signin"> LOGIN </Link>
            </div>
          </div>
        </nav>
      );
  }
}
