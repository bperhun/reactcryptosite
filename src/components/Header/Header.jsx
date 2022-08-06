import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import clasess from '../Header/Header.module.css';

const Header = () => {

    function onClickMenu() {
        document.querySelector(`.${clasess.header__line}`).classList.toggle(`${clasess.active}`);
        document.querySelector(`.${clasess.header__menu}`).classList.toggle(`${clasess.active}`);
    }

    window.onload = function () {
        window.setInterval(function () {
            let date = new Date();

            let hours = date.getUTCHours();
            let minutes = date.getUTCMinutes();
            let seconds = date.getUTCSeconds();

            if (hours < 10) hours = '0' + hours;
            if (minutes < 10) minutes = '0' + minutes;
            if (seconds < 10) seconds = '0' + seconds;

            let clock = 'UTC:' + hours + ':' + minutes + ':' + seconds;

            document.getElementById('clock').innerHTML = clock;
        }, 1000);

    }

    return (
        <div className={clasess.header}>
            <div className="container">
                <div className={clasess.header__row}>
                    <div className={clasess.header__logo}>
                        <Link to='/'><img src="../img/white_logo.png" alt="Логотип крипто гризли" /></Link>
                    </div>
                    <div className={clasess.header__menu}>
                        <ul className={clasess.header__items}>
                            <li><Link to='/noRiskProject'>Без рисков</Link></li>
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
                        <p id="clock"></p>
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