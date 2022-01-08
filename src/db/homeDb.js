const db = require("./db");

class HomeDb {
  usersStatistics = async () => {
    try {
      const numberOfUsers = await db.user.count({});
      return numberOfUsers;
    } catch (e) {
      return 0;
    }
  };

  productsStatistics = async () => {
    try {
      const numberOfProducts = await db.produtos.count({});
      return numberOfProducts;
    } catch (e) {
      return 0;
    }
  };

  scheduleStatistics = async () => {
    try {
      const numberOfNextSchedules = await db.scheduling.count({
        where: {
          data: {
            gte: new Date(),
          },
        },
      });

      const nextSchedule = await db.scheduling.findMany({
        select: {
          user: {
            select: {
              name: true,
            },
          },
          service: {
            select: {
              name: true,
              price: true,
            },
          },
          data: true,
        },

        where: {
          data: {
            gte: new Date(),
          },
        },
        orderBy: {
          data: "asc",
        },
        take: 1,
      });
      return { numberOfNextSchedules, nextSchedule };
    } catch (e) {
      return null;
    }
  };
}

module.exports = new HomeDb();
