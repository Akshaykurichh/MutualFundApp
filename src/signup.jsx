/* global gapi */
import React, { useState, useEffect } from "react";
//import logo from "../logo.svg";
import { GoogleLogin, useGoogleLogin } from "react-google-login";
//import "../App.css";
import { TabsComponent } from "./TabsComponent";
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// function NotSignedIn() {
//   return (
//     <div>
//       <p>You are not signed in. Click here to sign in.</p>
//       <button id="loginButton">Login with Google</button>
//     </div>
//   )
// }

function Signup() {
  const [username, setuserName] = useState(null);
  const [familyName, setFamilyname] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setemail] = useState(null);
  //const [gLogin,setGLogin]=useGoogleLogin();

  const onSuccess = responseGoogle => {
    //console.log("check",GoogleLoginProps);
    console.log("response from google is :", responseGoogle);
    console.log("signin is :", responseGoogle.profileObj.email);
    responseGoogle.profileObj.email === null
      ? setIsSignedIn(false)
      : setIsSignedIn(true);
    setuserName(responseGoogle.profileObj.givenName);
    setFamilyname(responseGoogle.profileObj.familyName);
    setemail(responseGoogle.profileObj.email);
    console.log(responseGoogle.profileObj.givenName);
  };
  const onFailure = responseGoogle => {
    console.log();
  };

  // useEffect()
  // {

  // }
  const responseGoogle = response => {
    console.log("response is:", response);
  };
  const checkSignInHandler = flag => {
    //console.log(GoogleLoginProps);
    setIsSignedIn(flag);
  };
  return (
    <div className="App">
      {!isSignedIn ? (
        <p>
          Create Account/Login with existing Account as you are not signed in
          <GoogleLogin
            clientId="1049818032751-a7pf2paimnc5c4ed023fa0grcbldbou0.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            isSignedIn={checkSignInHandler}
            responseHandler={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </p>
      ) : (
        <div>
          <p>Hey,You are Signed in as: {username}</p>
          <TabsComponent
            username={username}
            familyName={familyName}
            email={email}
            visible={isSignedIn}
          />
        </div>
      )}

      {/* {username!==null&&<h2>Your username is :{username}</h2>} */}
    </div>
  );
}

export default Signup;
