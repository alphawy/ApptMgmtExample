import {ActionTypes} from './Types';

export const editAppointment = (timeslot, name, phone) => ({
    type: ActionTypes.APPOINTMENT_EDIT,
    payload: {timeslot, name, phone}
});

export const updateAppointmentName = (timeslot, name) => ({
    type: ActionTypes.APPOINTMENT_UPDATE_NAME,
    payload: { timeslot, name }
})

export const updateAppointmentPhone = (timeslot, phone) => ({
    type: ActionTypes.APPOINTMENT_UPDATE_PHONE,
    payload: { timeslot, phone }
})
