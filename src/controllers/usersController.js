const UsersDb = require("../db/usersDb");
const UserCreate = require("./../models/UserCreate");
const UserGet = require("./../models/UserGet");

class UsersController {
  constructor(db) {
    this.db = db;
  }

  create = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).send({
        error: "Missing required argument (must have name, email and password)",
      });

      return;
    }

    const userCreate = new UserCreate(name, email, password);
    const userFromDb = await this.db.createUser(userCreate);
    if (userFromDb) {
      const user = new UserGet(
        userFromDb.id,
        userFromDb.name,
        userFromDb.email
      );
      res.status(201).send(user);
    } else {
      res.status(500).send({ error: "Error while trying to create user" });
    }
  };

  findUser = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      res.status(400).send({
        error: "Missing required argument (must have id)",
      });

      return;
    }

    const userFromDb = await this.db.findUser(id);

    if (userFromDb) {
      const user = new UserGet(
        userFromDb.id,
        userFromDb.name,
        userFromDb.email
      );
      res.send(user);
    } else {
      res.status(404).send();
    }
  };

  findAll = async (req, res) => {
    const usersFromDb = await this.db.findAll();

    if (usersFromDb) {
      const users = usersFromDb.map(
        (user) => new UserGet(user.id, user.name, user.email)
      );
      res.send(users);
    } else {
      res.status(500).send({ error: "Error while trying to retrieve users" });
    }
  };
}

module.exports = new UsersController(UsersDb);
