const db = require('../db/servicesDb')
const ServicesWithoutId = require('../models/ServicesWithoutId')
class ServicesController {
    constructor(db){
        this.db = db
    }
    createServices = async (req, res) => {
        const {employeeName, name, price} = req.body
        const services = new ServicesWithoutId(employeeName, name, price)
        const create = await db.createServices(services)
            console.log(create)
            if(create){
                res.status(201).send(create)
            }
            else{
                res.status(500).send("Erro!")
            }
    }
    findServices = async (req, res) => {
        const {id} = req.params
        const find = await db.findServices(id)
        if(find){
            res.send(find)
        }
        else{
            res.status(404).send("Não foi possível encontrar o serviço")
        }
    }
    updateServices = async (req, res) => {
        const {id} = req.params
        const {employeeName, name, price} = req.body
        const services = new ServicesWithoutId(employeeName, name, price)
        const update = await this.db.updateServices(id, services)
        if(update){
            res.send(update)
        }
        else{
            res.status(500).send("Não foi possível atualizar")
        }
    }
}
module.exports = new ServicesController(db)
