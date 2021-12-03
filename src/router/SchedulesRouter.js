const scheduleController = require("./../controllers/scheduleController");
const { Router } = require("express");

const router = Router();

router.post("/", scheduleController.createSchedule);
router.get("/:id", scheduleController.findSchedule);
router.get("/", scheduleController.findAll);
// router.patch("/:id", scheduleController.update);
// router.delete("/:id", scheduleController.remove);

module.exports = router;
