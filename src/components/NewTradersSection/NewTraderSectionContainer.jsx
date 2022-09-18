import React from "react";
import NewTradersSection from "./NewTraderSection";
import { addPostActionCreator, updatePostActionCreation } from "../../redux/newTradersReducer";


const NewTradersSectionContainer = (props) => {
    let state = props.state.getState().newTradersData;

    const addPost = () => {
        props.state.dispatch(addPostActionCreator());
    }

    const updatePost = (headerData, altData, srcData, paragraphData) => {
        props.state.dispatch(updatePostActionCreation(headerData, altData, srcData, paragraphData));
    }


    return (
        <NewTradersSection state={state} addPost={addPost} updatePost={updatePost} />
    );
}

export default NewTradersSectionContainer;