import React from "react";
import NewTradersSection from "./NewTraderSection";
import { addPostActionCreator, updatePostActionCreation } from "../../redux/newTradersReducer";
import { connect } from "react-redux";


let mapStateToProps = (state) => {

    return {
        data: state.newTradersData.data,
        templatesData: state.newTradersData.templatesData,
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updatePost: (headerData, altData, srcData, paragraphData) => {
            dispatch(updatePostActionCreation(headerData, altData, srcData, paragraphData));
        }
    }
}

const NewTradersSectionContainer = connect(mapStateToProps, mapDispatchToProps)(NewTradersSection);

export default NewTradersSectionContainer;    