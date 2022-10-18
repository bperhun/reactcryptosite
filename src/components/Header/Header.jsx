import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import clasess from '../Header/Header.module.css';
import { logOutAction } from '../../redux/authReducer';
import { useDispatch } from "react-redux";

const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuth);


    const lineButton = React.useRef();
    const menuButton = React.useRef();

    function onClickMenu() {
        lineButton.current.classList.toggle(`${clasess.active}`);
        menuButton.current.classList.toggle(`${clasess.active}`);
    }

    function removeClassMenu() {
        lineButton.current.classList.remove(`${clasess.active}`);
        menuButton.current.classList.remove(`${clasess.active}`);
    }

    const dispatch = useDispatch();

    function logOut() {
        dispatch(logOutAction());
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
                        <Link to='/' onClick={removeClassMenu}><img src="../img/white_logo.png" alt="Логотип крипто гризли" /></Link>
                    </div>
                    <div className={clasess.header__menu} ref={menuButton}>
                        <ul className={clasess.header__items}>
                            <li onClick={removeClassMenu} ><NavLink to='/noRiskProject' className={({ isActive }) =>
                                isActive ? clasess.active : ""}>Без рисков</NavLink></li>
                            <li onClick={removeClassMenu}><NavLink to='/mediumRiskProject' className={({ isActive }) =>
                                isActive ? clasess.active : ""}>Умеренный риск</NavLink></li>
                            <li onClick={removeClassMenu}><NavLink to='/forNewTraders' className={({ isActive }) =>
                                isActive ? clasess.active : ""}>Для новичков</NavLink></li>
                            <li onClick={removeClassMenu}><NavLink to='/aboutUs' className={({ isActive }) =>
                                isActive ? clasess.active : ""}>О Нас</NavLink></li>
                            {!isAuth && <li onClick={removeClassMenu}><NavLink to='/auth' className={({ isActive }) =>
                                isActive ? clasess.active : ""}>Вход</NavLink></li>}
                            {isAuth && <li onClick={removeClassMenu}><NavLink to='/' className={({ isActive }) =>
                                isActive ? clasess.active : ""} onClick={logOut}>Выход</NavLink></li>}
                            <li><a href="https://t.me/+Wg2w6nlnbM9hYWY6" target="_blank">telegram</a></li>
                        </ul>
                    </div>
                    <div className={clasess.header__telegram}>
                        <a href="https://t.me/+Wg2w6nlnbM9hYWY6" target="_blank"><img src="./img/telegram_white.svg" alt="Переход в телеграм канал" /></a>
                    </div>
                    <div className={clasess.header__utc}>
                        <p id="clock"></p>
                    </div>
                    <div onClick={onClickMenu} className={clasess.header__button}>
                        <div className={clasess.header__line} ref={lineButton}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;