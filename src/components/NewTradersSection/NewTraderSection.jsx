import React from "react";
import { useRef } from "react";
import classes from "../NewTradersSection/NewTradersSection.module.css";
import NewTraderPost from "./NewTraderPost/NewTraderPost";


const NewTradersSection = (props) => {

    const postNewTraderElement = props.state.newTradersData.map((item, index) => {

        return <NewTraderPost key={index} id={item.id} header={item.header} src={item.src} alt={item.alt} p1={item.p1} p2={item.p2} p3={item.p3} p4={item.p4} p5={item.p5} p6={item.p6} p7={item.p7} p8={item.p8} p9={item.p9} p10={item.p10} p11={item.p11} p12={item.p12} p13={item.p13} p14={item.p14} p15={item.p15} p16={item.p16} p17={item.p17} p18={item.p18} p19={item.p19} p20={item.p20} p21={item.p21} />
    });

    let headerButtin = useRef();

    const addHeader = () => {
        props.addPost();
    }

    const updateHeader = () => {
        let text = headerButtin.current.value;
        props.updateText(text);
    }


    return (
        <div className={classes.noRisk}>
            <div className={classes.noRisk__title}>
                <h1>Для новичков</h1>
                <p>Еще недостаточно опытны в криптовалюте и не хотите рисковать деньгами? Хотите получить небольшую прибыль без вложений? Тогда этот раздел вам подходит. Здесь будут публиковаться актуальные и завершенные проекты, где вы можете заработать от 1 до 20$, но которые не требуют каких-то навыков или вложений.</p>
            </div>
            <div className="container">
                <div className={classes.noRisk__posts}>
                    {postNewTraderElement}
                    <textarea ref={headerButtin} onChange={updateHeader} value={props.state.postText} />
                    <input type='submit' onClick={addHeader}></input>
                </div>
            </div>
        </div>
    );
}

export default NewTradersSection;