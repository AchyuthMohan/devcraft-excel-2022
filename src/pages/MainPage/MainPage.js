<<<<<<< HEAD
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import MainLayout from "../../components/MainLayout/MainLayout";
import "./MainPage.css";
=======
import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import{Navbar} from '../../components/Navbar/Navbar'
import{About} from '../../components/About/About'
import {MoreDetails} from '../../components/MoreDetails/MoreDetails'
import './MainPage.css'
import Hero from '../../components/Hero/Hero'
>>>>>>> 0318d43 (component edition)
const MainPage = () => {
  const { signedInUser, signInWithGoogle, signOutOfGoogle } =
    useContext(UserContext);
  return (
    <MainLayout>
<<<<<<< HEAD
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
    </MainLayout>
  );
};
=======
      <Navbar/>
      <Hero/>
      <About/>
      <MoreDetails/>
    </MainLayout>
  )
}
>>>>>>> 0318d43 (component edition)

export default MainPage;
