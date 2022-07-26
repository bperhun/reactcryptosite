import React from "react";
import classes from "../NoRiskSection/NoRiskSection.module.css";
import PostNoRisk from "./PostNoRisk/PostNoRisk";

const NoRiskSection = () => {

    return (
        <div className={classes.noRisk}>
            <div className={classes.noRisk__title}>
                <h1>Проекты без рисков</h1>
            </div>
            <div className="container">
                <div className={classes.noRisk__posts}>
                    <PostNoRisk />
                    <PostNoRisk />
                    <PostNoRisk />
                </div>
            </div>
        </div>
    );
}

export default NoRiskSection;