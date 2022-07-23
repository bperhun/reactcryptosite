import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import './styles/App.css';

const App = () => {
  const burger__button = document.querySelector('.header__button');

  function onClickMenu() {
    document.querySelector(".header__line").classList.toggle("active");
    document.querySelector(".header__menu").classList.toggle("active");
  }

  burger__button.onclick = onClickMenu;

  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div >
  );
}

export default App;
