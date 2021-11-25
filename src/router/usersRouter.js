const UsersController = require("./../controllers/usersController");
const { Router } = require("express");

const router = Router();

router.post("/", UsersController.create);
router.get("/:id", UsersController.findUser);
router.get("/", UsersController.findAll);
router.patch("/:id", UsersController.update);

module.exports = router;
