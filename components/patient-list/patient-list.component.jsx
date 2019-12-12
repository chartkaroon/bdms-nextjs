import PatientListItem from "../patient-list-item/patient-list-item.component";

const PatientList = (props) => {
    return (
        <div id="PatientList">
            {
                props.patients.map( patient => <PatientListItem className="patient-list" key={ patient._id } patient={ patient } />)
            }
        </div>
    );
};

export default PatientList;
