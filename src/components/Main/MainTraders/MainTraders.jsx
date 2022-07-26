import React from "react";
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente, non quos eligendi
                                impedit
                                veniam excepturi assumenda maxime quod qui obcaecati deleniti alias, ullam earum enim repellat
                                explicabo
                                voluptatum esse!</p>
                            <a href="#">Смотреть</a>
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