const usersRouter = require("./usersRouter");

const appRouter = (server) => {
  usersRouter(server);
};

module.exports = appRouter;
