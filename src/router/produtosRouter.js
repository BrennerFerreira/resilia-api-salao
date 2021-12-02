const ProdutosController = require("../controllers/produtosController");
const { Router } = require("express");

const router = Router();

router.post("/", ProdutosController.createProduct);
router.get("/:id", ProdutosController.findProduct);
router.get("/", ProdutosController.findAll);
router.patch("/:id", ProdutosController.update);
router.delete("/:id", ProdutosController.remove);

module.exports = router;
