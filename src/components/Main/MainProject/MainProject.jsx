import React from "react";
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
                            <h2>наши проекты</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente, non quos eligendi
                                impedit
                                veniam excepturi assumenda maxime quod qui obcaecati deleniti alias, ullam earum enim repellat
                                explicabo
                                voluptatum esse!</p>
                            <a href="#">Смотреть</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainProject;