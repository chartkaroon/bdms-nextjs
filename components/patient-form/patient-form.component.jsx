import React from "react";
import axios from "axios";
import { SubmitStatus } from '../submit-status/submit-status.component';

class PatientForm extends React.Component {
    constructor() {
        super();
        this.state = {
            patientName: '',
            patientIllness: '',
            displaySubmission: {
                submitStatus: '',
                patientName: '',
                patientIllness: '',
            }
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let data = {...this.state};

        axios.post('http://localhost:3333/api/v1/patients', data)
            .then((response) => {
                //Empty the form and update the state
                this.setState({
                    patientName: "",
                    patientIllness: "",
                    displaySubmission: {
                        submitStatus: response.data.submitStatus,
                        patientName: response.data.patientName,
                        patientIllness: response.data.patientIllness,
                    }
                });

            })
            .catch((error) => {
                console.log(error);
            });
    };

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Patient Name</label>
                    <input
                        id="patientName"
                        name="patientName"
                        type="text"
                        value={this.state.patientName}
                        onChange={this.handleChange}
                    />
                    <br/>

                    <label>Enter Patient Illness</label>
                    <input
                        id="patientIllness"
                        name="patientIllness"
                        type="text"
                        value={this.state.patientIllness}
                        onChange={this.handleChange}
                    />
                    <br/>

                    <button>Submit</button>
                </form>
                <SubmitStatus displaySubmission={this.state.displaySubmission}/>
            </div>

        );
    };
}

export default PatientForm;