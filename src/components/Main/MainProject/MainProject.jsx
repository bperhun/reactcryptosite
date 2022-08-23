import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../MainProject/MainProject.module.css";

const MainProject = () => {

    return (
        <div className={classes.mainProject}>
            <div className="container">
                <div className={classes.mainProject__row}>
                    <div className={classes.mainProject__left}>
                        <img src="/img/crypro_projects.png" alt="Картинка биткоина" />
                    </div>
                    <div className={classes.mainProject__right}>
                        <div className={classes.mainProject__card}>
                            <div className={classes.mainProject__circle}></div>
                            <div className={classes.mainProject__circle}></div>
                            <h2>Актуальный проект</h2>
                            <p>Самый актуальный текущий проект, который по нашему мнению точно принесет вам прибыль. Не теряйте время, забирайте деньги.</p>
                            <NavLink to='/noRiskProject'>Смотреть</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainProject;