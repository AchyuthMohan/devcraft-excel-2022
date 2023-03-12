import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import MoreDetails from '../../components/MoreDetails/MoreDetails'
import './MainPage.css'
import Hero from '../../components/Hero/Hero'
const MainPage = () => {
  const { signedInUser, signInWithGoogle, signOutOfGoogle } =
    useContext(UserContext);
  return (
    <MainLayout>
      <Navbar/>
      <Hero/>
      <About/>
      <MoreDetails/>
    </MainLayout>
  )
}

export default MainPage;
