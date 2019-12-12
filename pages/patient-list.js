import React from "react";
import axios from "axios";
import Navbar from "../components/navbar/navbar.component";
import PatientList from "../components/patient-list/patient-list.component";

const PatientListPage = (props) => {
    return (
        <div id="PatientListPage">
            <Navbar/>
            <h1>Patient List Page</h1>
            {<PatientList patients={props.patients}/>}
        </div>
    );
}

PatientListPage.getInitialProps= async () => {
    const response = await axios.get('http://localhost:3333/api/v1/patients');
    return {
        patients: response.data.data.patients
    };
}

export default PatientListPage;