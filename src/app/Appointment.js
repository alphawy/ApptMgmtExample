import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TimeSlotList } from "./TimeSlotList";

export class AppointmentList extends Component {
    handleEditAppointment = (...args) => {
        this.props.editAppointment(...args);
        // this.props.history.push("/appointment/detail")
    }

    render() {
        return <React.Fragment>
        <div className="container-fluid">
                <div className="m-3">
                    <h2 className="text-center">Appointment Schedule</h2>
                </div>
            <div className="m-3">
                <div className="text-center">
                    <TimeSlotList timeSlots={ this.props.timeslots } 
                        appointments={ this.props.appointments }
                        editAppointment={ this.handleEditAppointment }/>
                </div>
            </div>
        </div>
        <div className="text-center">
            This is the extra that we can remove very easy in Appointment.js ...
            <Link className="btn btn-primary m-1" to="/appointment/details">
                You have worked on these time slots. 
            </Link>
        </div>
            
        </React.Fragment>
    }
}