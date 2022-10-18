import React from "react";
import MediumRiskSection from "./MediumRiskSection";
import { connect } from "react-redux";

let mapStateToProps = (state) => {

    return {
        data: state.mediumRiskData.data,
    }
}
let mapDispatchToProps = (dispatch) => {

    return {

    }
}

const MediumRiskSectionContainer = connect(mapStateToProps, mapDispatchToProps)(MediumRiskSection);

export default MediumRiskSectionContainer; 