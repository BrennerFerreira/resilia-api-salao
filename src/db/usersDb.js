const bcrypt = require("bcrypt");

const db = require("./db");

class UsersDb {
  _saltRounds = 10;

  createUser = async (user) => {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, this._saltRounds);

    try {
      const createdUser = await db.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      return createdUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  findUser = async (id) => {
    try {
      const user = await db.user.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  findAll = async () => {
    try {
      const users = await db.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      return users;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

module.exports = new UsersDb();
