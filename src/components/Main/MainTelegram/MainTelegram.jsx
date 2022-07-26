import React from "react";
import classes from "../MainTelegram/MainTelegram.module.css";

const MainTelegram = () => {

    return (
        <div className={classes.mainTelegram}>
            <div className="container">
                <div className={classes.mainTelegram__row}>
                    <div className={classes.mainTelegram__left}>
                        <img src="/img/img_iphone.png" alt="Картинка афона с открытым телеграмом" />
                    </div>
                    <div className={classes.mainTelegram__right}>
                        <h2>Наш телеграм</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente, non quos eligendi impedit
                            veniam excepturi assumenda maxime quod qui obcaecati deleniti alias, ullam earum enim repellat explicabo
                            voluptatum esse!</p>
                        <a href="#">Перейти в телеграм</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainTelegram;