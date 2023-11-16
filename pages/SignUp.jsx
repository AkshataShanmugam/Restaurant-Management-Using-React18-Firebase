import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import Nav from "../src/components/Navbar";
//
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  //
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMessage("User successfully signed up!");
        setIsVisible(true);
        navigate("/placeOrder");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setMessage("User already exists!");
          setIsVisible(true);
        } else {
          setMessage("An error occurred while signing up.");
          setIsVisible(true);
        }
      });
  };

  const closeMessage = () => {
    setIsVisible(false);
  };

  if (message && isVisible) {
    return (
      <div className="message-container">
        <p>{message}</p>
        <button onClick={closeMessage}>Close</button>
      </div>
    );
  } else {

    return (
      <div className="sign-in--div">
        <Nav />
        <div className="background-fill">
          <div className="sign-in-container">
            <form onSubmit={signUp}>
              <br></br>
              <h1>Create Account</h1>
              <input className="sign-in--input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
                </input>
                <br></br>
              <input className="sign-in--input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br></br>
              <button className ="sign-in--button" type="submit">Sign Up</button>
              <br></br>
              <p className="sign-in--pass">Please ensure that password is greater than 6 characters.</p>
            </form>
            {/* <br></br>
            <div className="sign-in--links">
                <Link className ="sign-in--link" to = "/"> Back to Home </Link>
                <Link className ="sign-in--link" to = "/signin"> Sign In Instead? </Link>
              </div>
            <br></br> */}
            <br></br>
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
