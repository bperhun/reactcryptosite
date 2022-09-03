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
                            <NavLink to='/forNewTraders'>Для новичков</NavLink>
                            <p>Еще недостаточно опытны в криптовалюте и не хотите рисковать деньгами?<br /><br /> Хотите получить небольшую прибыль без вложений?<br /><br /> Тогда этот раздел вам подходит.<br /><br /> Здесь будут публиковаться актуальные и завершенные проекты, где вы можете заработать от 1 до 20$,<br /><br /> но которые не требуют каких-то навыков или вложений.</p>
                        </div>
                    </div>
                    <div className={classes.mainTraders__right}>
                        <img src="/img/business.svg" alt="Картинка трейдинга" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MainTraders;