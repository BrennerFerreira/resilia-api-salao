const UsersDb = require("../db/usersDb");
const UserWithoutId = require("./../models/UserWithoutId");

class UsersController {
  constructor(db) {
    this.db = db;
  }

  create = async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
      res.status(400).send({
        error: "Missing required argument (must have name and email)",
      });

      return;
    }

    try {
      const userWithoutId = new UserWithoutId(name, email);
      const userFromDb = await this.db.createUser(userWithoutId);
      if (userFromDb) {
        res.status(201).send(userFromDb);
      } else {
        res.status(500).send({ error: "Error while trying to create user" });
      }
    } catch (error) {
      res.status(409).send({ error: error.message });
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
      res.send(userFromDb);
    } else {
      res.status(404).send();
    }
  };

  findAll = async (req, res) => {
    const usersFromDb = await this.db.findAll();

    if (usersFromDb) {
      res.send(usersFromDb);
    } else {
      res.status(500).send({ error: "Error while trying to retrieve users" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = new UserWithoutId(name, email, password);

    const updatedUser = await this.db.updateUser(id, user);

    if (updatedUser) {
      res.status(204).send();
    } else {
      res.status(500).send({ error: "Error while trying to retrieve users" });
    }
  };

  remove = async (req, res) => {
    const { id } = req.params;

    const removedId = await this.db.removeUser(id);

    if (removedId) {
      res.status(204).send();
    } else {
      res.status(500).send({ error: "Error while trying to retrieve users" });
    }
  };
}

module.exports = new UsersController(UsersDb);
