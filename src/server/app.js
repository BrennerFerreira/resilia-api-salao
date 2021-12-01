const express = require("express");

const router = require("./../router/appRouter");

const app = express();

app.use(router);

module.exports = app;
