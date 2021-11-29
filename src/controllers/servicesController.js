const db = require('../db/servicesDb')
class ServicesController {
    constructor(db){
        this.db = db
    }
    createServices = async (req, res) => {
        const {employeeName} = req.body
        const services = new model(employeeName, price)
        const create = await db.createServices(services)
            console.log(create)
            if(create){
                res.status(201).send(create)
            }
            else{
                res.status(500).send("Erro!")
            }
    }
}
module.exports = new ServicesController(db)
