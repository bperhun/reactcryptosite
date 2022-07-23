import React from "react";

const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <a href="#"><img src="../img/white_logo.png" alt="Логотип крипто гризли" /></a>
                    </div>
                    <div className="header__menu">
                        <ul className="header__items">
                            <li><a href="#">Без рисков</a></li>
                            <li><a href="#">Умеренный риск</a></li>
                            <li><a href="#">Для новичков</a></li>
                            <li><a href="#">О Нас</a></li>
                            <li><a href="#">telegram</a></li>
                        </ul>
                    </div>
                    <div className="header__telegram">
                        <a href="#"><img src="./img/telegram_white.svg" alt="Переход в телеграм канал" /></a>
                    </div>
                    <div className="header__utc">
                        <p>UTC</p>
                    </div>
                    <div className="header__button">
                        <div className="header__line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;