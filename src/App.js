import React, { useEffect } from "react";
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
import AuthContainer from "./components/AuthSection/AuthContainer";
import store from "./redux/reduxStore";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../src/actions/user";

const App = (props) => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  }, []);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/noRiskProject" element={<NoRiskSectionContainer store={props.store} />} />
          <Route path="/mediumRiskProject" element={<MediumRiskSectionContainer store={props.store} />} />
          <Route path="/forNewTraders" element={<NewTradersSectionContainer store={props.store} />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          {!isAuth &&
            <Route path="/auth" element={<AuthContainer />} />
          }
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
