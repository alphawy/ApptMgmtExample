import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import {AppointmentPopup} from './AppConnector';

const isTimeslotTaken = (appointments, timeslot) => 
    (!timeslot || !appointments) 
        ? false
        : appointments.filter(appt => 
            (appt.timeslot.id === timeslot.id && (appt.name || appt.phone))).length > 0;

const resolveBgColor = (appointments, timeslot) => 
    (isTimeslotTaken(appointments, timeslot)) ? "bg-danger": "bg-write";

export class TimeSlotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    handleShow = (ts) => {
        this.props.editAppointment(ts, "", "");
        this.setState({show: true});
    }
    handleClose = () => {
        this.setState({show: false});
    }

    popupModel = () => {
        return (
            <Modal show={this.state.show} onHide={this.handleClose} size="lg">
                <Modal.Body>
                    <AppointmentPopup />
                </Modal.Body>
            </Modal>
        )
    }

    render() {
        if (this.props.timeSlots == null || this.props.timeSlots.length === 0) {
            return <h5 className="p-2">No Time Slots</h5>
        }
        return <React.Fragment>
            {   this.props.timeSlots.map(ts =>
                    <div className="card m-1 p-1 bg-light" key={ ts.id }>
                        <div className={"card-text p-1 " + resolveBgColor(this.props.appointments, ts)}
                                onClick={ () => this.handleShow(ts) }>
                            {ts.name}
                        </div>
                    </div>
                )
            }
            {this.popupModel()}
        </React.Fragment>
    }
}