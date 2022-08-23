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
                        <p>Узнавайте о самых актуальных проектах и раздачах с детальным описанием в нашем телеграм-канале. Быстрота, качество и уверенность в прибыли.</p>
                        <a href="https://t.me/+Wg2w6nlnbM9hYWY6" target="_blank">Перейти в телеграм</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainTelegram;