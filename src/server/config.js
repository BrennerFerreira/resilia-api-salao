const express = require("express");

const configServer = (server) => {
  server.use(express.json());
};

module.exports = configServer;
