import React from "react";
import clasess from '../Header/Header.module.css';

const Header = () => {


    function onClickMenu() {
        document.querySelector(`.${clasess.header__line}`).classList.toggle(`${clasess.active}`);
        document.querySelector(`.${clasess.header__menu}`).classList.toggle(`${clasess.active}`);
    }


    return (
        <div className={clasess.header}>
            <div className="container">
                <div className={clasess.header__row}>
                    <div className={clasess.header__logo}>
                        <a href="#"><img src="../img/white_logo.png" alt="Логотип крипто гризли" /></a>
                    </div>
                    <div className={clasess.header__menu}>
                        <ul className={clasess.header__items}>
                            <li><a href="#">Без рисков</a></li>
                            <li><a href="#">Умеренный риск</a></li>
                            <li><a href="#">Для новичков</a></li>
                            <li><a href="#">О Нас</a></li>
                            <li><a href="https://t.me/+jZ0h0jNfu65iNTNi" target="_blank">telegram</a></li>
                        </ul>
                    </div>
                    <div className={clasess.header__telegram}>
                        <a href="https://t.me/+jZ0h0jNfu65iNTNi" target="_blank"><img src="./img/telegram_white.svg" alt="Переход в телеграм канал" /></a>
                    </div>
                    <div className={clasess.header__utc}>
                        <p>UTC</p>
                    </div>
                    <div onClick={onClickMenu} className={clasess.header__button}>
                        <div className={clasess.header__line}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;