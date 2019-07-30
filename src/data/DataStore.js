import { createStore, applyMiddleware } from "redux";
import { TimeSlotReducer } from "./TimeSlotReducer";
import { AppointmentReducer } from "./AppointmentReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware";

export const AppDataStore 
    = createStore(CommonReducer(TimeSlotReducer, AppointmentReducer),
            applyMiddleware(asyncActions));
