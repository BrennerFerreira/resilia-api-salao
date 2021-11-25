const { Router, json } = require("express");
const cors = require("cors");

const usersRouter = require("./usersRouter");

const router = Router();

router.use(json());
router.use(cors());

router.use("/users", usersRouter);

module.exports = router;
