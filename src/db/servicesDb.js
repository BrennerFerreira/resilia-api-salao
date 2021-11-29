const db = require('./db')
class ServicesDb {
    createSchedule =  async (services) => {
        const {employeeId, serviceId, price} = services
        try {
        const create = await db.services.create({
            data:{employeeId, serviceId, price}
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
