const db = require("./db");
class ScheduleDb {
  deleteSchedule = async (id) => {
    try {
      const agendamentos = await db.scheduling.delete({
        where: {
          id: id,
        },
      });
      return agendamentos;
    } catch (erro) {
      console.log(erro);
      return null;
    }
  };

  updateSchedule = async (id, schedule) => {
    try {
      const agendamentos = await db.scheduling.update({
        where: {
          id: id,
        },
        data: {
          ...schedule,
        },
      });
      return agendamentos;
    } catch (erro) {
      console.log(erro);
      return null;
    }
  };
  findAll = async () => {
    try {
      const agendamentos = await db.scheduling.findMany({
        select: {
          id: true,
          service: {
            select: {
              name: true,
            },
          },
          user: {
            select: {
              name: true,
            },
          },
        },
        data: true,
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
          id: id,
        },
      });
      return find;
    } catch (erro) {
      console.log(erro);
      return null;
    }
  };

  createSchedule = async (schedule) => {
    const { userId, data, serviceId } = schedule;
    try {
      const create = await db.scheduling.create({
        data: {
          userId,
          data,
          serviceId,
        },
      });
      return create;
    } catch (erro) {
      console.log(erro);
      return null;
    }
  };
}
module.exports = new ScheduleDb();
