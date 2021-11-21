const UsersController = require("./../controllers/usersController");

const usersRouter = (server) => {
  server.post("/users", UsersController.create);
  server.get("/users/:id", UsersController.findUser);
  server.get("/users", UsersController.findAll);
};

module.exports = usersRouter;
