const homeDb = require("../db/homeDb");

class HomeController {
  constructor(db) {
    this.db = db;
  }

  getStatistics = async (req, res) => {
    const users = await this.db.usersStatistics();
    const products = await this.db.productsStatistics();
    const schedules = await this.db.scheduleStatistics();

    res.send({ users, products, schedules });
  };
}

module.exports = new HomeController(homeDb);
