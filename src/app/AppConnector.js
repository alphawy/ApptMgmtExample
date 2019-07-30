import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { editAppointment, updateAppointmentName, updateAppointmentPhone }
    from "../data/AppointmentActionCreators";
import { DataTypes } from "../data/Types";
import { AppointmentList } from "./Appointment";
import { AppointmentDetails, AppointmentDetail } from "./AppointmentDetails";

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    loadData,
    editAppointment, updateAppointmentName, updateAppointmentPhone
}

export const AppConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return <Switch>
                <Route path="/appointment/timeslots"
                    render={ (routeProps) =>
                        <AppointmentList {...this.props} {...routeProps } 
                            timeSlots={this.props.timeSlots }/>
                    } />
                <Route path="/appointment/details" 
                    render={ (routeProps) =>
                        <AppointmentDetails { ...this.props } { ...routeProps }  />} />                
                <Redirect to="/appointment/timeslots" />
            </Switch>
        }
        componentDidMount() {
            this.props.loadData(DataTypes.TIMESLOTS);
        }
    }
);

export const AppointmentPopup = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return (
                <AppointmentDetail {...this.props} />
            )
        }
    }
)