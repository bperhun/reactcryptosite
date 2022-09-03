import React from "react";
import classes from "../MainTelegram/MainTelegram.module.css";

const MainTelegram = () => {

    return (
        <div className={classes.mainTelegram}>
            <div className="container">
                <span className={classes.mainTelegram__circle}></span>
                <span className={classes.mainTelegram__circle}></span>
                <span className={classes.mainTelegram__circle}></span>
                <span className={classes.mainTelegram__circle}></span>
                <div className={classes.mainTelegram__row}>
                    <div className={classes.mainTelegram__left}>
                        <img src="/img/bitcoin_coin.svg" alt="Картинка биткоина" />
                    </div>
                    <div className={classes.mainTelegram__right}>
                        <p>Узнавайте о самых актуальных проектах и раздачах с детальным описанием в нашем телеграм-канале.<br /><br />Быстрота, качество и уверенность в прибыли.</p>
                        <a href="https://t.me/+Wg2w6nlnbM9hYWY6" target="_blank">Перейти в телеграм</a>
                    </div>
                </div>
                <div className={classes.mainTelegram__img}>
                    <img src="/img/tg_main_img.svg" alt="Главная картинка страницы телеграмм" />
                </div>
            </div>
        </div>
    );
}

export default MainTelegram;