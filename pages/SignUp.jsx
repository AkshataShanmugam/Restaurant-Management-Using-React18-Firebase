import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import Nav from "../src/components/Navbar";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const regex = /^\w+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleInputChange = (e) => {
    setTableNumber(e.target.value);
    console.log("Current tableNumber:", e.target.value);
    localStorage.setItem('tableNumber', JSON.stringify(e.target.value));
  };

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    if (!email && !password && !tableNumber) {
      alert('Please fill in all fields.');
    } else if(!email){
      alert('Please fill in email ID');
    } else if (!regex.test(email)) {
      alert('Please enter a valid email address');
    } else if(!password){
      alert('Please fill in password')
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters long');
    } else if(!tableNumber){
      alert('Please fill in table number')
    } else if(!/^\d+$/.test(tableNumber)){
      alert('Please fill in an integer table number')
    } else{
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("User successfully signed up!");
          localStorage.setItem('emailId', JSON.stringify(email));
          navigate("/placeOrder");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert("User already exists!");
          } else {
            alert("An error occurred while signing up.");
          }
        });
      }
  };

  return (
    <div className="sign-in--div">
      <Nav />
      <div className="background-fill">
        <div className="sign-up-container">
          <form onSubmit={signUp}>
            <br></br>
            <h1>Create Account</h1>
            <p className="sign-up--instructions">
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
            <button className ="toOrder--links" type="submit">Let's Sign Up</button>
            <br></br>
            <p className="sign-in--pass">Please ensure that password is greater than 6 characters.</p>
          </form>
            <div className="sign-up--offer">
              <h2>Special Offer!</h2>
              <p>By signing up now and get 10% off your first purchase!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
