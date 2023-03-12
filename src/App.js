import "./App.css";
import React from "react";
import ScrollToTop from "./utils/ScrollToTop";
import { MainPage, DietPg, PlanPg, DietDetailPg } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/diet" element={<DietPg />} />
          <Route path="/plan" element={<PlanPg />} />
          <Route path="/diet-detail" element={<DietDetailPg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
