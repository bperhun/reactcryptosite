import React from "react";
import classes from "../NewTraderPost/NewTraderPost.module.css";

const NewTraderPost = (props) => {
    const blockButton = React.useRef();
    const blockHeader = React.useRef();
    const blockContent = React.useRef();

    function onClickBlock() {
        blockHeader.current.classList.toggle(`${classes.active}`);
        blockContent.current.classList.toggle(`${classes.active}`);
    }

    return (
        <div className={classes.newTrader__post}>
            <div onClick={onClickBlock} className={classes.newTrader__block} id={props.id} ref={blockButton}>
                <h2 className={classes.newTrader__header} ref={blockHeader}>{props.header}</h2>
            </div>
            <div className={classes.newTrader__itemsMain} ref={blockContent}>
                <div>
                    <img src={props.src} alt={props.alt} />
                </div>
                <div>
                    <p>{props.p1}</p>
                    <p>{props.p2}</p>
                    <p>{props.p3}</p>
                    <p>{props.p4}</p>
                    <p>{props.p5}</p>
                    <p>{props.p6}</p>
                    <p>{props.p7}</p>
                    <p>{props.p8}</p>
                    <p>{props.p9}</p>
                    <p>{props.p10}</p>
                    <p>{props.p11}</p>
                    <p>{props.p12}</p>
                    <p>{props.p13}</p>
                    <p>{props.p14}</p>
                    <p>{props.p15}</p>
                    <p>{props.p16}</p>
                    <p>{props.p17}</p>
                    <p>{props.p18}</p>
                    <p>{props.p19}</p>
                    <p>{props.p20}</p>
                    <p>{props.p21}</p>
                </div>
            </div>
        </div >
    );
}

export default NewTraderPost;