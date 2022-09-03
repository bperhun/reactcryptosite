import React from "react";
import classes from "../MainScreen/MainScreen.module.css";

const MainScreen = () => {

    return (
        <div className={classes.mainScreen}>
            <div className="container">
                <span className={classes.mainScreen__circle}></span>
                <span className={classes.mainScreen__circle}></span>
                <span className={classes.mainScreen__circle}></span>
                <div className={classes.mainScreen__title}>
                    <h1>Crypto Grizzly community</h1>
                </div>
                <div className={classes.mainScreen__img}>
                    <img src="../img/main_img.svg" />
                </div>
                <div className={classes.mainScreen__text}>
                    <p>Крипто Гризли. Универсальное решение для всех, кто увлекается криптовалютой и хочет на ней заработать.<br /><br /> Не имеет значения, есть ли у вас 200$, 10$ или 0$ - каждый найдет что-то полезное для себя.<br /><br /> Хотите зарабатывать без риска или готовы немного вложить в эту сферу? Решение есть для всех.</p>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;