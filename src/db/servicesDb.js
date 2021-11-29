const db = require('./db')
class ServicesDb {
    createSchedule =  async (services) => {
        const {id, employeeName, serviceName, price} = services
        try {
        const create = await db.services.create({
            data:{id, employeeName, serviceName, price}
        })
            console.log(create)
            return create
    } catch(erro){
        console.log(erro)
        return null
    }
}
}
module.exports = new ServicesDb()
