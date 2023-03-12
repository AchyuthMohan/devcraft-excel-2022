import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./MainLayout.css";
const MainLayout = ({ children }) => {
  return (
    <div className="main__layout_conatiner">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  );
};

export default MainLayout;
