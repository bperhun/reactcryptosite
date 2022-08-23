import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../MainTraders/MainTraders.module.css";

const MainTraders = () => {

    return (
        <div className={classes.mainTraders}>
            <div className="container">
                <div className={classes.mainTraders__row}>
                    <div className={classes.mainTraders__left}>
                        <div className={classes.mainTraders__card}>
                            <div className={classes.mainTraders__circle}></div>
                            <div className={classes.mainTraders__circle}></div>
                            <h2>Для новичков</h2>
                            <p>Еще недостаточно опытны в криптовалюте и не хотите рисковать деньгами? Хотите получить небольшую прибыль без вложений? Тогда этот раздел вам подходит. Здесь будут публиковаться актуальные и завершенные проекты, где вы можете заработать от 1 до 20$, но которые не требуют каких-то навыков или вложений.</p>
                            <NavLink to='/forNewTraders'>Смотреть</NavLink>
                        </div>
                    </div>
                    <div className={classes.mainTraders__right}>
                        <img src="/img/trading.jpg" alt="Картинка трейдинга" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MainTraders;