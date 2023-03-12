import "./App.css";
import React from "react";
import ScrollToTop from './utils/ScrollToTop'
import { MainPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
