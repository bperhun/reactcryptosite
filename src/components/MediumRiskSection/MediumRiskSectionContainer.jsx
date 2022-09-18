import React from "react";
import MediumRiskSection from "./MediumRiskSection";

const MediumRiskSectionContainer = (props) => {
    const postMediumRiskData = props.state.getState().mediumRiskData.data.sort((a, b) => b.id - a.id);

    return (
        <MediumRiskSection data={postMediumRiskData} />
    );
}

export default MediumRiskSectionContainer; 