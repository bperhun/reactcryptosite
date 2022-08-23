import React from "react";
import classes from "../NoRiskSection/NoRiskSection.module.css";
import PostNoRisk from "./PostNoRisk/PostNoRisk";

const NoRiskSection = (props) => {

    const postNoRiskData = props.state.noRiskData.sort((a, b) => b.id - a.id);

    const postNoRiskElement = postNoRiskData.map((item, index) => {
        return <PostNoRisk key={index} h2={item.header} src={item.src} p1={item.p1} p2={item.p2} p3={item.p3} p4={item.p4} deadline={item.deadline} button_link={item.button_link} />;
    });

    return (
        <div className={classes.noRisk}>
            <div className={classes.noRisk__title}>
                <h1>Проекты без рисков</h1>
                <p>Здесь указаны текущие и завершенные проекты, которые не требуют вложений для входа или же требуются минимальные вложения, которые вы не потеряете. Подходит для всех, у кого есть хотя бы 100-150$, кто готов их вкладывать, но не готов заходить на проекты с повышенным риском.</p>
            </div>
            <div></div>
            <div className="container">
                <div className={classes.noRisk__posts}>
                    {postNoRiskElement}

                </div>
            </div>
        </div>
    );
}

export default NoRiskSection; 