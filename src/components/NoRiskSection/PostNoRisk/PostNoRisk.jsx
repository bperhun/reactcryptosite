import React from "react";
import classes from "../PostNoRisk/PostNoRisk.module.css";

const PostNoRisk = (props) => {



    return (
        <div className={classes.noRisk__post}>
            <h2>{props.h2}</h2>
            <div className={classes.noRisk__itemsMain}>
                <div>
                    <img src={props.src} alt="test" />
                </div>
                <div>
                    <p>{props.p1}</p>
                    <p>{props.p2}</p>
                    <p>{props.p3}</p>
                    <p>{props.p4}</p>
                    <p>{props.p5}</p>
                </div>
            </div>
            <div className={classes.noRisk__itemsBottom}>
                <div><b>{props.deadline}</b></div>
                <div> <a href={props.button_link}>Смотреть</a></div>
            </div>
        </div >
    );
}

export default PostNoRisk; 