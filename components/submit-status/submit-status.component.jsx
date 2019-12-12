import React from "react";

export const SubmitStatus = (props) => {
    let data = undefined;
    if (props.displaySubmission.submitStatus) {
        data = (
            <div>
                <div>Submit Status: {props.displaySubmission.submitStatus}</div>
                <div>Patient Name: {props.displaySubmission.patientName}</div>
                <div>Patient Illness: {props.displaySubmission.patientIllness}</div>
            </div>
        );
    } else {
        data = <div/>;
    }

    return data;
};