const app = require("./server/app");

app.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(`Error: ${error}`);
  }

  console.log(`Server running on port: ${process.env.PORT || 3000}`);
});
