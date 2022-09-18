import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MediumRiskSection from "./components/MediumRiskSection/MediumRiskSection";
import MediumRiskSectionContainer from "./components/MediumRiskSection/MediumRiskSectionContainer";
import NewTradersSection from "./components/NewTradersSection/NewTraderSection";
import NewTradersSectionContainer from "./components/NewTradersSection/NewTraderSectionContainer";
import NoRiskSectionContainer from "./components/NoRiskSection/NoRiskSectionContainer";
import './styles/App.css';

const App = (props) => {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/noRiskProject" element={<NoRiskSectionContainer state={props.state} />} />
          <Route path="/mediumRiskProject" element={<MediumRiskSectionContainer state={props.state} />} />
          <Route path="/forNewTraders" element={<NewTradersSectionContainer state={props.state} />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
