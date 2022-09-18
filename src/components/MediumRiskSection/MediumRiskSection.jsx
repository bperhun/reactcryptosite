import React from "react";
import classes from "../MediumRiskSection/MediumRiskSection.module.css";
import PostMediumRisk from "./PostMediumRisk/PostMediumRisk";

const MediumRiskSection = (props) => {

    const postMediumRiskElement = props.data.map((item, index) => {
        return <PostMediumRisk key={index} h2={item.header} src={item.src} p1={item.p1} p2={item.p2} p3={item.p3} p4={item.p4} deadline={item.deadline} button_link={item.button_link} />;
    });

    return (
        <div className={classes.noRisk}>
            <div className="container">
                <div className={classes.noRisk__title}>
                    <span className={classes.noRisk__circle}>
                        <h1>Умеренный риск</h1>
                    </span>
                </div>
                <div className={classes.noRisk__posts}>
                    <p>Вы уже знаете что такое рынок криптовалют и имеете на балансе от 100 до 400$? Не хотите проходить глимы, раздачи, но хотите заходить в уверенные проекты? Тогда этот раздел для вас. Здесь будут публиковаться актуальные и завершенные возможности для заработка с наличием некоторого риска. Зачастую все они выходят в плюс.</p>
                    <span className={classes.noRisk__circle}></span>
                    <span className={classes.noRisk__circle}></span>
                    {postMediumRiskElement}

                </div>
            </div>
        </div>
    );
}

export default MediumRiskSection; 