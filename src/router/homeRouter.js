const HomeController = require("../controllers/homeController");
const { Router } = require("express");

const router = Router();

router.get("/", HomeController.getStatistics);

module.exports = router;
