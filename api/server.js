const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const testRouter = require("./routes/test");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api", testRouter);

module.exports = server;
