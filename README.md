## Prerequsites
* it needs node.js. install node.js, if you have not do so. 
* make sure you have npm installed as well. npm usually installed with node. However, for any reasons you don't have it, install it.


## Quick Start Guide: 
0. download the project
1. cd to the project root (where package.json lives), 
2. download depend packages. 
###  `npm install`
3. run the application
###  `npm start`
    if everything turns out right, it shall open a browser and start the application
    if for any reasons, the browser does not starts, type following url in your browser. (it has been tested with chrome)
###  http://localhost:5000


## For Windows only ...
    open package.json, find the line contains "PORT=5000", remove the setting for the port. Run the application at the default port 3000
    `http://localhost:3000`
    for a reason I am still research, window npm does not accept "PORT=...". Above work around is tested working.

## Brief Explanation

The project work has two parts, the web service that supplies the time slots, and the web application that work with the time slots for appointments.

`npm start` first bring up the web service at port 3550, then bring up the web server for the react application at port 5000. (see blow: for how tochange port)

The web service uses json-server package that dumps the content in the appointment-data.js as the response payload.

The react web application starts with the list of time slot available for select. Click on a time slot, brings up a popup, with two input field for name and phone. Key in any value to any of the field, will mark the corresponding time slot red. By clear out both name and phone, will reset the time slot to write. To find out the web service run,
### http://localhost:3550/api/timeslots/1

Click on the button below the list, brings up a summery of all the time slot you have clicked. You can change the values of the name and/or the phone in a batch mode. 


### Howto Change Port

* The port of the react web service is defined in package.json. Search for 'reactstart', you will find the port in the same line
* The port of the web service is defined in server.js. Your will find the variable port. 
