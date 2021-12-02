const db = require('./db')
class ServicesDb {
    createServices =  async (services) => {
        const {employeeName, name, price} = services
        try {
        const create = await db.services.create({
            data:{employeeName, name, price}
        })
            console.log(create)
            return create
    } catch(erro){
        console.log(erro)
        return null
    }
}
    findServices = async (id) => {
        try{
        const find = await db.services.findUnique({
            where:{id:id}
        }) 
            console.log(find)
            return find
    } catch(erro){
        console.log(erro)
        return null
    }
}
    findAll = async () => {
        try {
          const services = await db.services.findMany({
          });
    
          return services;
        } catch (error) {
          console.log(error);
          return null;
        }
      }
}
updateServices = async (id, services) => {
    try {
      const updatedServices = await db.services.update({
        where: {
          id: id,
        },
        data: {
          ...services,
        },
      });

      return updatedServices;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
module.exports = new ServicesDb()
