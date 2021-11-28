const db = require('./db')
class ScheduleDb {
    createSchedule =  async (schedule) => {
        const {userId, data} = schedule
        try {
        const create = await db.scheduling.create({
            data:{userId, data}
        })
            console.log(create)
            return create
    } catch(erro){
        console.log(erro)
        return null
    }
}
}
module.exports = new ScheduleDb()