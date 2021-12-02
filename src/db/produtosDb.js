const db = require('./db')
class produtosDb{
    
    createProdutos= async(produtos) => {
        console.log(produtos)
        const {name, preco} = produtos
        try {
        const produto = await db.produtos.create({
            data:{name, preco}
        })
        return produto;
    } catch (error) {
        console.log(error)
        return null;
    }
    }

    findProduct = async (id) => {
        try {
          const produto = await db.produtos.findUnique({
            where: {
              id: id,
            }
          });
    
          return produto;
        } catch (error) {
          console.log(error);
          return null;
        }
      };

      findAll = async () => {
        try {
          const produtos = await db.produtos.findMany({
          });
    
          return produtos;
        } catch (error) {
          console.log(error);
          return null;
        }
      };

      updateProduto = async (id, product) => {
        try {
          const updatedProduct = await db.produtos.update({
            where: {
              id: id,
            },
            data: {
              ...product,
            }
          });
    
          return updatedProduct;
        } catch (error) {
          console.log(error);
          return null;
        }
      };

      removeProduct = async (id) => {
        try {
          const removedId = await db.produtos.delete({
            where: {
              id: id,
            }
          });
    
          return removedId;
        } catch (error) {
          console.log(error);
          return null;
        }
      };
}
module.exports = new produtosDb()