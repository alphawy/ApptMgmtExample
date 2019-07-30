import { ActionTypes } from "./Types";
export const AppointmentReducer = (storeData, action) => {
    let newStore = { appointments: [], currSlot: null, ...storeData }
    switch(action.type) {
        case ActionTypes.APPOINTMENT_EDIT:
            const ts = action.payload.timeslot;
            // const name = action.payload.name;
            // const phone = action.payload.phone;
            let existing = newStore.appointments.find(item => item.timeslot.id === ts.id);
            if (existing) {
                // existing.name = name;
                // existing.phone = phone;
            } else {
                newStore.appointments = [...newStore.appointments, action.payload];
            }
            newStore.currSlot = ts;
            return newStore;
        case ActionTypes.APPOINTMENT_UPDATE_NAME:
            newStore.appointments = newStore.appointments.map(item => {
                if (item.timeslot.id === action.payload.timeslot.id) {
                    item.name = action.payload.name;
                }
                return item;
            });
            return newStore;
        case ActionTypes.APPOINTMENT_UPDATE_PHONE:
            newStore.appointments = newStore.appointments.map(item => {
                if (item.timeslot.id === action.payload.timeslot.id) {
                    item.phone = action.payload.phone;
                }
                return item;
            });
            return newStore;
        default:
            return storeData || {};
    }
}