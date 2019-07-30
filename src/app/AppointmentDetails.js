import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppointmentDetailsRows } from "./AppointmentDetailsRows";


export class AppointmentDetails extends Component {
    render() {
        return <div className="m-3">
            <h2 className="text-center">Edit Appointment</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Time Slot</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <AppointmentDetailsRows appointments={ 
                            (!this.props.appointments) 
                                ? this.props.appointments
                                : this.props.appointments.sort((a, b) => (a.timeslot.id - b.timeslot.id))
                                  }
                        currSlot = { null }
                        updateName ={ this.props.updateAppointmentName }
                        updatePhone ={ this.props.updateAppointmentPhone }
                        removeAppointment={ this.props.removeAppointment } />
                </tbody>
            </table>
            <div className="text-center">
                <Link className="btn btn-primary m-1" to="/app">
                    OK
                </Link>
            </div>
        </div>
    }
}

export class AppointmentDetail extends Component {
    render() {
        return <div className="m-3">
            <h2 className="text-center">Edit Appointment</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Time Slot</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <AppointmentDetailsRows appointments={ this.props.appointments }
                        currSlot = { this.props.currSlot }
                        updateName ={ this.props.updateAppointmentName }
                        updatePhone ={ this.props.updateAppointmentPhone }
                        removeAppointment={ this.props.removeAppointment } />
                </tbody>
            </table>
            <div className="text-center">
                <Link className="btn btn-primary m-1" to="/app">
                    Save
                </Link>
            </div>
        </div>
    }
}