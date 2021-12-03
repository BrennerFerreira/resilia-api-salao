const db = require('./db')
class ScheduleDb {
    updateSchedule = async (id, userId) => {
        try {
            const  agendamentos = await db.scheduling.update({
                where: {
                    id:id
                },
                data:{userId}
            })
            return agendamentos
        }
        catch(erro) {
            console.log(erro)
            return null
        }
    }
    findAll = async () => {
        try {
          const agendamentos = await db.scheduling.findMany({
          });
          return agendamentos;
        } catch (error) {
          console.log(error);
          return null;
        }
      };
    findSchedule = async (id) => {
        try {
            const find = await db.scheduling.findUnique({
                where: {
                    id: id
                }
            })
            return find
        } catch (erro) {
            console.log(erro)
            return null
        }
    }
    createSchedule = async (schedule) => {
        const {
            userId,
            data
        } = schedule
        try {
            const create = await db.scheduling.create({
                data: {
                    userId,
                    data
                }
            })
            console.log(create)
            return create
        } catch (erro) {
            console.log(erro)
            return null
        }
    }
}
module.exports = new ScheduleDb()