import React from "react";
import classes from "../PostMediumRisk/PostMediumRisk.module.css";

const PostMediumRisk = (props) => {



    return (
        <div className={classes.noRisk__post}>
            <h2>{props.h2}</h2>
            <div className={classes.noRisk__itemsMain}>
                <div>
                    <img src={props.src} alt="test" />
                </div>
                <div className={classes.noRisk__bg}>
                    <div className={classes.noRisk__p}>
                        <p>{props.p1}</p>
                        <p>{props.p2}</p>
                        <p>{props.p3}</p>
                        <p>{props.p4}</p>
                        <p>{props.p5}</p>
                    </div>
                </div>
            </div>
            <div className={classes.noRisk__itemsBottom}>
                <div><b>{props.deadline}</b></div>
                <div> <a href={props.button_link}>Смотреть</a></div>
            </div>
        </div >
    );
}

export default PostMediumRisk; 