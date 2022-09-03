import React from "react";
import classes from "../AboutUs/AboutUs.module.css";

const AboutUs = () => {

    return (
        <div className={classes.noRisk}>
            <div className="container">
                <div className={classes.noRisk__title}>
                    <span className={classes.noRisk__circle}>
                        <h1>О нас</h1>
                    </span>
                </div>
                <div className={classes.noRisk__posts}>
                    <span className={classes.noRisk__circl}></span>
                    <span className={classes.noRisk__circl}></span>
                    <span className={classes.noRisk__circl}></span>
                    <p>Криптовалютный рынок - это длинная и извилистая дорожка по пути к хорошим деньгам, на которой есть свои крутые повороты, которые уничтожат ваш депозит, так и длинные прямые участки. Вы можете здесь как потерять, так и получить хорошую прибыль. Целью нашего молодого, но уверенного проекта Crypto Grizzly является пройти с вами этот путь с новичка до легенды.</p>
                    <p>Здесь вы найдёте разные типы проектов, которые помогут вам заработать: от проектов без вложений, как Binance Learn&Earn и Aidrop, до проектов с вложениями, но без риска, как Launchpad. Для любителей риска также освещаем события в сфере NFT, которые по нашему мнению будут плюсовыми. С нами вы заработаете свои первые деньги в сфере Crypto. Давайте двигаться вместе!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;