import "./App.css";
import React,{Suspense} from "react";
import ScrollToTop from "./utils/ScrollToTop";
import { MainPage, DietPg, PlanPg, DietDetailPg } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./contexts/UserContext";
import Calculator from "./pages/Calculator/Calculator";
import SuspenseLoader from "./components/Loader/SuspenseLoader";
function App() {
  return (
    <UserProvider>
      <div className="App">
        <Toaster />
        <BrowserRouter>
        <Suspense fallback={<SuspenseLoader/>}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/plan" element={<DietPg />} />
            <Route path="/diet" element={<PlanPg />} />
            <Route path="/diet-detail" element={<DietDetailPg />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
