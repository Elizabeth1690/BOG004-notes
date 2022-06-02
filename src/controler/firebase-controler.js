import { loginWithGoogle, GoogleAuthProvider } from "./firebase.js";
// import React from "react";
//import { useNavigate } from "react-router-dom";

export const loginGoogle = () => {
  // let navigate = useNavigate();
  loginWithGoogle()
    .then((result) => {
      //    navigate("/notes");
      console.log("buenooooooooooooooo");
      window.location.href = "/notes";
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
