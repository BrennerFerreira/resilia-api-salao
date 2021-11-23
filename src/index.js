const express = require("express");

const appRouter = require("./router/appRouter");
const configServer = require("./server/config");

const app = express();

configServer(app);
appRouter(app);

app.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(`Error: ${error}`);
  }

  console.log(`Server running on port: ${process.env.PORT || 3000}`);
});
