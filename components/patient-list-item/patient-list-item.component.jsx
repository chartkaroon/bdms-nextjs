import React from "react";

const PatientListItem = (props) => {
    return (
        <div id='PatientListItem'>
            <div>Patient Name: {props.patient.patientName}</div>
            <div>Patient Illness: {props.patient.patientIllness}</div>
            <hr/>
        </div>
    );
};

export default PatientListItem;
