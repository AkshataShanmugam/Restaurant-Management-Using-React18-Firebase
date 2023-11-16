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
  const [tableNumber, setTableNumber] = useState("");

  const handleInputChange = (e) => {
    setTableNumber(e.target.value);
    console.log("Current tableNumber:", e.target.value);
    localStorage.setItem('tableNumber', JSON.stringify(e.target.value));
  };
  
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMessage("User successfully signed up!");
        setIsVisible(true);
        localStorage.setItem('emailId', JSON.stringify(email));
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
          <div className="sign-up-container">
            <form onSubmit={signUp}>
              <br></br>
              <h1>Create Account</h1>
              <p>
                Join our community and start exploring amazing features! Fill out the form below to get started.
              </p>
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
              <input
                  className="sign-in--input"
                  type="tableNumber"
                  placeholder="Assigned table number"
                  value={tableNumber}
                  onChange={handleInputChange}
              />
              <br></br>
              <button className ="toOrder--links" type="submit">Sign Up</button>
              <br></br>
              <p className="sign-in--pass">Please ensure that password is greater than 6 characters.</p>
            </form>
            <div>
                <h2>Why Sign Up?</h2>
                <ul>
                  <li>Save your favorite items and preferences.</li>
                  <li>Have a contact-less food ordering experience.</li>
                  <li>Explore the dishes at your own convenience.</li>
                </ul>
            </div>
            <div>
                <h2>Special Offer!</h2>
                <p>Sign up now and get 10% off your first purchase!</p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
