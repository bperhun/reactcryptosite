import React from "react";
import { useRef } from "react";
import classes from "../NewTradersSection/NewTradersSection.module.css";
import NewTraderPost from "./NewTraderPost/NewTraderPost";

const NewTradersSection = (props) => {

    const postNewTraderElement = props.state.data.map((item, index) => {

        return <NewTraderPost key={index} id={item.id} header={item.header} src={item.src} alt={item.alt} p1={item.p1} p2={item.p2} p3={item.p3} p4={item.p4} p5={item.p5} p6={item.p6} p7={item.p7} p8={item.p8} p9={item.p9} p10={item.p10} p11={item.p11} p12={item.p12} p13={item.p13} p14={item.p14} p15={item.p15} p16={item.p16} p17={item.p17} p18={item.p18} p19={item.p19} p20={item.p20} p21={item.p21} />
    });

    let header = useRef();
    let alt = useRef();
    let src = useRef();
    let paragraph = useRef();

    const addHeader = () => {
        props.addPost();
    }

    const updateHeader = () => {
        let headerData = header.current.value;
        let altData = alt.current.value;
        let srcData = src.current.value;
        let paragraphData = paragraph.current.value;
        props.updatePost(headerData, altData, srcData, paragraphData);
    }


    return (
        <div className={classes.noRisk}>
            <div className="container">
                <div className={classes.noRisk__title}>
                    <span className={classes.noRisk__circle}>
                        <h1>Для новичков</h1>
                    </span>
                </div>
                <div className={classes.noRisk__posts}>
                    <p>Еще недостаточно опытны в криптовалюте и не хотите рисковать деньгами? Хотите получить небольшую прибыль без вложений? Тогда этот раздел вам подходит. Здесь будут публиковаться актуальные и завершенные проекты, где вы можете заработать от 1 до 20$, но которые не требуют каких-то навыков или вложений.</p>
                    <span className={classes.noRisk__circle}></span>
                    <span className={classes.noRisk__circle}></span>

                    {postNewTraderElement}
                    <textarea ref={header} onChange={updateHeader} value={props.state.templatesData.header} />
                    <textarea ref={alt} onChange={updateHeader} value={props.state.templatesData.alt} />
                    <textarea ref={src} onChange={updateHeader} value={props.state.templatesData.src} />
                    <textarea ref={paragraph} onChange={updateHeader} value={props.state.templatesData.paragraph1} />
                    <input type='submit' onClick={addHeader}></input>
                </div>
            </div>
        </div>
    );
}

export default NewTradersSection;