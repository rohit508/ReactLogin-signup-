import React, { useState, useEffect } from 'react'
import "./index.css";
import fire from "./fire"
import Login from './login'
import Home from "./home";


function App() {

  // ======= state  =======

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [hasAcount, sethasAcount] = useState('false');






  // ======= clear Input =======

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  // ======= clear  Errors =======

  const clearErrors = () => {
    setEmailError('');
    setpasswordError('');
  }

  // ======= login  function=======


  const handlelogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "anth/user-disbled":
          case "auth/user-not-fount":
            setEmailError(error.message)
            break;
          case "auth/wrong-password":
            setpasswordError(error.message);
            break
        }
      });
  };

  // ======= Sigup  function =======

  const handleSignup = () => {
    clearErrors();

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "anth/invalid":
            setEmailError(error.message)
            break;
          case "auth/weak-password":
            setpasswordError(error.message);
            break;
        }
      });
  };














  // ======= logout function=======


  const handlelogout = () => {
    fire.auth().signOut();
  };


  // ===============Manage Users in Firebase ==========

  const authlistener = () => {
    fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("")
      }
    });
  }










  useEffect(() => {
    authlistener();
  }, []);

  return (
    <>
      {user ? (
        <Home handlelogout={handlelogout} />


      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handlelogin={handlelogin}
            handleSignup={handleSignup}
            hasAcount={hasAcount}
            sethasAcount={sethasAcount}
            emailError={emailError}
            passwordError={passwordError} />
        )}
    </>
  )
}


export default App