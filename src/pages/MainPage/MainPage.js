import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import "./MainPage.css";
import About from "../../components/About/About";
import MoreDetails from "../../components/MoreDetails/MoreDetails";
import "./MainPage.css";
import Hero from "../../components/Hero/Hero";
const MainPage = () => {
  return (
    <MainLayout>
      <Hero/>
      {/* <About />
      <MoreDetails /> */}
    </MainLayout>
  );
};

export default MainPage;
