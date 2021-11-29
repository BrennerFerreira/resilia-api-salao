const ProdutosDb = require("../db/produtosDb")
const ProdutosSemID = require("../models/produtoSemID")
const Produtos = require("../models/produto")

class ProdutosController {
    constructor(db) {
        this.db = db;
      }
      createProduct = async (req, res) => {
          const {name, preco} = req.body;
      
          const produto = new ProdutosSemID(name, preco);
          const produtoCriado = await this.db.createProdutos(produto);
          if (produtoCriado) {
              res.status(201).send(produtoCriado)
          } else {
              res.status(500).send("Produto não cumpre os criterios minimos");
          }
        }
}

module.exports = new ProdutosController(ProdutosDb);