import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./MainPage.css";
const MainPage = () => {
  const { signedInUser, signInWithGoogle, signOutOfGoogle } =
    useContext(UserContext);
  return (
    <div>
      <h1>Main Page</h1>
      <button
        onClick={() => {
          if (signedInUser) {
            signOutOfGoogle();
          } else {
            signInWithGoogle();
          }
        }}
      >
        {signedInUser ? "Sign Out" : "Sign In"}
      </button>
      {signedInUser && (
        <div>
          <h1>{signedInUser.displayName}</h1>
          <img src={signedInUser.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default MainPage;
