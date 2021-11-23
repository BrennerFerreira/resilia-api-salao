const express = require("express");

const router = require("./router/appRouter");

const app = express();

app.use(router);

app.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(`Error: ${error}`);
  }

  console.log(`Server running on port: ${process.env.PORT || 3000}`);
});
