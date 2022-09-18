import React from "react";
import NoRiskSection from "./NoRiskSection";


const NoRiskSectionContainer = (props) => {

    const postNoRiskData = props.state.getState().noRiskData.data.sort((a, b) => b.id - a.id);

    return (
        <NoRiskSection data={postNoRiskData} />
    );
}

export default NoRiskSectionContainer; 