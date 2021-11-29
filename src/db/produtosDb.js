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
}
module.exports = new produtosDb()