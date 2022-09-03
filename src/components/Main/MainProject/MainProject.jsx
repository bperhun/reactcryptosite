import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../MainProject/MainProject.module.css";

const MainProject = () => {

    return (
        <div className={classes.mainProject}>
            <div className="container">
                <div className={classes.mainProject__row}>
                    <div className={classes.mainProject__left}>

                    </div>
                    <div className={classes.mainProject__right}>
                        <div className={classes.mainProject__card}>
                            <NavLink to='/noRiskProject'>Актуальный проект</NavLink>
                            <p>Самый актуальный текущий проект, который по нашему мнению точно принесет вам прибыль.<br /><br /> Не теряйте время, забирайте деньги.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainProject;