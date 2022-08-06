import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NoRiskSection from "./components/NoRiskSection/NoRiskSection";
import './styles/App.css';

const App = () => {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/noRiskProject" element={<NoRiskSection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
