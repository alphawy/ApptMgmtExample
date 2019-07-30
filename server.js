const express = require('express');
const jsonServer = require('json-server');
const chokidar = require('chokidar');
const cors = require('cors');

const fileName = "./appointment-data.js";
const port = 3550;

let router = undefined;

const app = express();

const createServer = () => {
    delete require.cache[require.resolve(fileName)];
    setTimeout(() => {
        router = jsonServer.router(require(fileName)());
    }, 100);
}

createServer();

app.use(cors());
app.use(jsonServer.bodyParser);
app.use('/api', (req, resp, next) => router(req, resp, next));

chokidar.watch(fileName).on("change", () => {
    console.log("Reloading web service data ...");
    createServer();
    console.log("Reloading web service data complete.");
});

app.listen(port, () => console.log(`web service running on port ${port}`));
