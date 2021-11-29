const servicesController = require("./../controllers/servicesController");
const { Router } = require("express");

const router = Router();

router.post("/", servicesController.createServices);
  //router.get("/:id", ServicesController.findUser);
  //router.get("/", ServicesController.findAll);
  //router.patch("/:id", ServicesController.update);
  //router.delete("/:id", ServicesController.remove);

module.exports = router;