const db = require('../db/scheduleDb')
const model = require('../models/ScheduleWithoutId')
class ScheduleController {
    constructor(db){
        this.db = db
    }
    findAll = async (req, res) => {
        const findAll = await this.db.findAll();
        if (findAll) {
          const schedule = findAll.map(
            (schedu) => new ScheduleWithoutId(schedu.id, schedu.userId, schedu.data)
          );
          res.send(schedule);
        } else {
          res.status(500).send({ error: "Erro tentando buscar todos os usuarios" });
        }
      };
    findSchedule = async (req, res) => {
        const {id} = req.params
        const find = await db.findSchedule(id)
        if (find) {
            res.send(find)
        }
        else {
            res.status(404).send("Não foi possível encontrar o agendamento")
        }
    }
    createSchedule = async (req, res) => {
        const {userId} = req.body
        let data = new Date()
        data.setDate(data.getDate() + 7)
        const schedule = new model(userId, data)
        const create = await db.createSchedule(schedule)
            console.log(create)
            if(create){
                res.status(201).send(create)
            }
            else{
                res.status(500).send("Deu Erro")
            }
    }
}
module.exports = new ScheduleController(db)