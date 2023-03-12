import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../utils/firebase";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [signedInUser, setSignedInUser] = useState();
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //const uid = user.uid;
        setSignedInUser(user);
      } else {
      }
    });
  });

  async function signOutOfGoogle() {
    signOut(auth)
      .then(() => {
        setSignedInUser(null);
      })
      .catch((error) => {});
  }
  async function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        //console.log(result);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        //const user = result.user;
        //console.log(user);
        return result;
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        return error;
      });
  }
  return (
    <UserContext.Provider
      value={{
        signedInUser,
        signInWithGoogle,
        signOutOfGoogle,
        setSignedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
