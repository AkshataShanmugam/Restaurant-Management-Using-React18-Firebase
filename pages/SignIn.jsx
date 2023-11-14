import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import Nav from "../src/components/Navbar";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  let emailID = ""
  const navigate = useNavigate();
  // let LoginError =""
  
  const signIn = (e) => {
    e.preventDefault();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     LoginError = false;
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/email-already-in-use") {
    //       LoginError = true;
    //     } 
    //   })
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMessage("User successfully logged in!");
        setIsVisible(true);
        emailID = email;
        // You might want to redirect the user to a new page upon successful login.
        navigate("/placeOrder");
      })
      .catch((error) => {
      emailID = null;
        // console.log(LoginError)
        // if (LoginError){
        //   setMessage("Email ID already registered please sign in.");
        //   setIsVisible(true);
        // } else 
        if (error.code === "auth/invalid-login-credentials"){
          setMessage("Invalid password.");
          setIsVisible(true);
        } else if (error.code === "auth/wrong-password"){
          setMessage("Access to this account has been temporarily disabled due to many failed attempts. You can immediately restore it by resetting your password or you can try again later.");
          setIsVisible(true);
        } else {
          setMessage("An error occurred while signing in.");
          setIsVisible(true);
        }
      });
      return emailID;
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
        <div className="sign-in-container">
          <form onSubmit={signIn}>
            <br></br>
            <h1>Log In to your Account</h1>
            <input
              className="sign-in--input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br></br>
            <input
              className="sign-in--input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br></br>
            <button className="sign-in--button" type="submit">
              Log In
            </button>
            <br></br>
          </form>
          <br></br>
          {/* <div className="sign-in--links">
            <Link className="sign-in--link" to="/">
              Back to Home
            </Link>
            <Link className="sign-in--link" to="/signup">
              Sign Up Instead?
            </Link>
          </div>
          <br></br> */}
          <br></br>
        </div>
      </div>
      
    );
  }
};

export default SignIn;
