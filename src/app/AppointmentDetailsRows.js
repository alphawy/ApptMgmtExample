import React, { Component } from "react";

const filterAppointments = (appointments, timeslot) => 
    (!timeslot) 
        ? appointments
        : appointments.filter(appt => appt.timeslot.id === timeslot.id);

export class AppointmentDetailsRows extends Component {
    handleNameChange = (timeslot, event) => {
        this.props.updateName(timeslot, event.target.value);
    }
    handlePhoneChange = (timeslot, event) => {
        this.props.updatePhone(timeslot, event.target.value);
    }

    render() {
        if ( !this.props.appointments ) {
            return <tr>
                <td colSpan="5">The appointment is not set</td>
            </tr>
        } else {
            return <React.Fragment>
                {   filterAppointments(this.props.appointments, this.props.currSlot).map(appt =>
                    <tr key={ appt.timeslot.id }>
                        <td>{ appt.timeslot.name }</td>
                        <td>
                            <input value={ appt.name }
                                onChange={ (ev) =>
                                    this.handleNameChange(appt.timeslot, ev) } />
                        </td>
                        <td>
                            <input value={ appt.phone }
                                onChange={ (ev) =>
                                    this.handlePhoneChange(appt.timeslot, ev) } />
                        </td>
                    </tr>
                )}
            </React.Fragment>
        }
    }
}