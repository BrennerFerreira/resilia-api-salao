const { Router, json } = require("express");

const usersRouter = require("./usersRouter");

const router = Router();

router.use(json());

router.use("/users", usersRouter);

module.exports = router;
