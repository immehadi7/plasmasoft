import React, { useState } from 'react';
import useAuth from "../../Hooks/useAuth";
import {Button} from "react-bootstrap"

import "./signup.css"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseAuthentication from '../../Firebase/firebase.init';

firebaseAuthentication()
const SignUp = () => {
  
    const auth = getAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [error, setError] = useState("");
  
    const [islogin, setIslogin] = useState(false);
  
    const handelRegistration = (e) => {
      e.preventDefault();
  
      console.log(email, password);
      if (password.length < 5) {
        setError("password must be 6 charector");
        return;
      }
      islogin ? processLogin(email, password) : createNewUser(email, password);
    };
  
    const processLogin = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  
    const createNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  
    const handelEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handelPasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const togglelogin = (e) => {
      setIslogin(e.target.checked);
    };
  
    const { signinUsingGoogle, FacebookSignin } = useAuth();
  
    return (
      <div className="d-flex justify-content-center ">
        <div className="sign-in shadow-lg my-5  px-5">
          <h3 className="text-center pt-5"> LOGIN TO OnMedi</h3>
          <hr className="w-75 ms-auto me-auto" />
          <div className="d-flex justify-content-around">
            <button type="button" class="fb my-2 " onClick={FacebookSignin}>
              Facebook
            </button>
            <button
              type="button"
              class="gmail  my-2 "
              onClick={signinUsingGoogle}
            >
              Gmail
            </button>
          </div>
  
          <hr className="w-75 ms-auto me-auto" />
          <form onSubmit={handelRegistration}>
            <div> Please {islogin ? "Login" : "Register"} </div>
          
            <div className="form-group my-4">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                onBlur={handelEmailChange}
                required
              />
            </div>
            <div className="form-group my-4">
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Password "
                onBlur={handelPasswordChange}
                required
              />
            </div>
  
         
  
            <Button type="submit" class="btn my-2 mt-3">
              {islogin ? "Login" : "Register"}
            </Button>
  
            <div className="form-check">
              <input
                onChange={togglelogin}
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Already Register ?
              </label>
            </div>
          </form>
          <div>{error}</div>
        </div>
  
       </div>
    );
};

export default SignUp;