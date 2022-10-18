import React from "react";
import NoRiskSection from "./NoRiskSection";
import { connect } from "react-redux";


let mapStateToProps = (state) => {

    return {
        data: state.noRiskData.data,
    }
}
let mapDispatchToProps = (dispatch) => {

    return {

    }
}

const NoRiskSectionContainer = connect(mapStateToProps, mapDispatchToProps)(NoRiskSection);
export default NoRiskSectionContainer; 