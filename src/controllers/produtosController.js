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


findProduct = async (req, res) => {
    const { id } = req.params;

    if (!id) {
      res.status(400).send({
        error: "Missing required argument (must have id)",
      });

      return;
    }

    const productFromDb = await this.db.findProduct(id);

    if (productFromDb) {
      const product = new ProductGet(
        productFromDb.id,
        productFromDb.name,
        productFromDb.preco
      );
      res.send(product);
    } else {
      res.status(404).send();
    }
  };

  findAll = async (req, res) => {
    const productFromDb = await this.db.findAll();

    if (productFromDb) {
      const product = productFromDb.map(
        (product) => new UserGet(product.id, product.name, product.preco)
      );
      res.send(product);
    } else {
      res.status(500).send({ error: "Error while trying to retrieve product" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { name, preco } = req.body;
    const product = new ProductCreate(name, preco);

    const updatedProduct = await productsDb.updateProduct(id, product);

    if (updatedProduct) {
      res.status(204).send();
    } else {
      res.status(500).send({ error: "Error while trying to retrieve products" });
    }
  };

  remove = async (req, res) => {
    const { id } = req.params;

    const removedId = await ProductsDb.removeProduct(id);

    if (removedId) {
      res.status(204).send();
    } else {
      res.status(500).send({ error: "Error while trying to retrieve Products" });
    }
  };
}


module.exports = new ProdutosController(ProdutosDb);