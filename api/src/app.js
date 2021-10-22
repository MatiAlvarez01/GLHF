const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index");

//-----SERVER EXPRESS-----//
const server = express();
server.name = "GLHF";

//-----CONECTION DATABASE-----//
const connDB = require("./db");
connDB();

//-----MIDDLEWARES-----//
server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

//-----ROUTES-----//
server.use("/", routes);

//-----CONTROL GENERALIZADO DE ERRORES -----//
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500; //Status = 500 es un error de servidor.
    const message  = err.message || err; //Si es un objeto, guardo el mensaje de ese obj. Y si es un string, lo guardo directamente
    console.error(err);
    res.status(status).send(message);
});

//-----EXPORT-----//
module.exports = server;