const ServicesController = require("./../controllers/servicesController");
const { Router } = require("express");

const router = Router();

router.post("/", ServicesController.createServices);
router.get("/:id", ServicesController.findServices);
// router.get("/", ServicesController.findAll);
router.patch("/:id", ServicesController.updateServices);
// router.delete("/:id", ServicesController.remove);

module.exports = router;