import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 3550;

export const RestUrls = {
    [DataTypes.TIMESLOTS]: `${protocol}://${hostname}:${port}/api/timeslots`
}
