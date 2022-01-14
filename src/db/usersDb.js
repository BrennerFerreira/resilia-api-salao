const db = require("./db");

class UsersDb {
  createUser = async (user) => {
    const { name, email, password } = user;

    try {
      const createdUser = await db.user.create({
        data: {
          name,
          email,
          password,
        },
      });

      return createdUser;
    } catch (error) {
      if (error.code === "P2002") {
        throw new Error("Duplicated email");
      }
      return null;
    }
  };

  findUser = async (id) => {
    try {
      const user = await db.user.findUnique({
        where: {
          id: id,
        },
      });

      return user;
    } catch (error) {
      return null;
    }
  };

  findAll = async () => {
    try {
      const users = await db.user.findMany({});

      return users;
    } catch (error) {
      return null;
    }
  };

  updateUser = async (id, user) => {
    try {
      const updatedUser = await db.user.update({
        where: {
          id: id,
        },
        data: {
          ...user,
        },
      });

      return updatedUser;
    } catch (error) {
      return null;
    }
  };

  removeUser = async (id) => {
    try {
      const numberOfSchedules = await db.scheduling.count({
        where: {
          userId: id,
        },
      });

      if (numberOfSchedules) {
        await db.scheduling.deleteMany({
          where: {
            userId: id,
          },
        });
      }

      const removedId = await db.user.delete({
        where: {
          id: id,
        },
      });

      return removedId;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

module.exports = new UsersDb();
