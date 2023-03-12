import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./MainLayout.css";
const MainLayout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  );
};

export default MainLayout;
