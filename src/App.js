import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MediumRiskSection from "./components/MediumRiskSection/MediumRiskSection";
import NewTradersSection from "./components/NewTradersSection/NewTraderSection";
import NoRiskSection from "./components/NoRiskSection/NoRiskSection";
import './styles/App.css';

const App = (props) => {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/noRiskProject" element={<NoRiskSection state={props.state} />} />
          <Route path="/mediumRiskProject" element={<MediumRiskSection state={props.state} />} />
          <Route path="/forNewTraders" element={<NewTradersSection state={props.state} addPost={props.addPost} updateText={props.updateText} />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
