const db = require('../db/scheduleDb')
const model = require('../models/ScheduleWithoutId')
class ScheduleController {
    constructor(db){
        this.db = db
    }
    deleteSchedule = async (req, res) => {
        const {id} = req.params
        const deleteSchedule = await this.db.deleteSchedule(id);
        if(deleteSchedule) {
            res.status(204).send()
        }
        else {
            res.status(500).send({error: "Erro tentando deletar usuario"})
        }
    }
    updateSchedule = async (req, res) => {
        const {id} = req.params
        const {userId} = req.body
        const updateSchedule = await this.db.updateSchedule(id, userId);
        if(updateSchedule) {
            res.status(204).send()
        }
        else {
            res.status(500).send({error: "Erro tentando atualizar usuario"})
        }
    }
    findAll = async (req, res) => {
        const findAll = await this.db.findAll();
        if (findAll) {
          res.send(findAll);
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