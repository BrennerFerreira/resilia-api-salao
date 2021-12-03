const db = require('./db')
class ScheduleDb {
    findAll = async () => {
        try {
          const agendamentos = await db.user.findMany({
            select: {
                id,
                userId,
                data
            },
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