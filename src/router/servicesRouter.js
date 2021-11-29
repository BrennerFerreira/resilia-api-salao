const servicesController = require("./../controllers/servicesController");
const { Router } = require("express");

const router = Router();

router.post("/", servicesController.createServices);

module.exports = router;