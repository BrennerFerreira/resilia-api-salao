const express = require("express");

const appRouter = require("./router/appRouter");
const configServer = require("./server/config");

const { PORT } = process.env;

const app = express();

configServer(app);
appRouter(app);

app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error: ${error}`);
  }
  console.log(process.env);
  console.log(`Server running on port: ${PORT}`);
});
