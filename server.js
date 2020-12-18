const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("./users/usersRouter");
const plantsRouter = require("./plants/plantsRouter");

const { validateToken } = require("./middleware");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/plants", validateToken, plantsRouter);

module.exports = server;
