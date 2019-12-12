import React from "react";
import Navbar from "../components/navbar/navbar.component";
import PatientForm from "../components/patient-form/patient-form.component";

const PatientFormPage = () => {
    return (
        <div id="PatientFormPage">
            <Navbar/>
            <PatientForm/>
        </div>
    );
};

export default PatientFormPage;