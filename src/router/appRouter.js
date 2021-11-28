const { Router, json } = require("express");
const cors = require("cors");

const usersRouter = require("./usersRouter");
const SchedulesRouter = require("./SchedulesRouter");

const router = Router();

router.use(json());
router.use(cors());

router.use("/users", usersRouter);
router.use("/schedules", SchedulesRouter);

module.exports = router;
