const db = require('./db')
class ScheduleDb {
    constructor(db){
        this.db = db
    }
    createSchedule = (schedule) => {
        const {userId, data} = schedule
        db.schedules.create({
            data:{userId, data}
        }).then((schedule)=> {
            return schedule
        }).catch((erro) => {
            console.log(erro)
            return null
        })
    }
}
module.exports = new ScheduleDb(db)