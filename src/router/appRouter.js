const { Router, json } = require("express");
const cors = require("cors");

const usersRouter = require("./usersRouter");
const servicesRouter = require("./servicesRouter");
const produtosRouter = require("./produtosRouter");
const SchedulesRouter = require("./SchedulesRouter");
const homeRouter = require("./homeRouter");

const router = Router();

router.use(json());
router.use(cors());

router.use("/users", usersRouter);
router.use("/services", servicesRouter);
router.use("/products", produtosRouter);
router.use("/schedules", SchedulesRouter);
router.use("/home", homeRouter);

module.exports = router;
