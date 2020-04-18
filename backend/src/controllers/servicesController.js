const connection = require('../database/connection');

module.exports = {
    async create(req,res){
        const services = req.body;
        const id_user = req.headers.authorization;

        await connection('services').insert({
            services,
            id_user
        })

        return res.json('servicos cadastrados');

    },
    async delete(req,res){
        const {id_user} = req.params;

        await connection('services').where('id_user',id_user).delete();

        return res.json('deletado');
    },
    async addService(req,res){
        const id_user = req.headers.authorization;
        const services = req.body;
        const oldServices = await connection('services').where('id_user',id_user).update({
            services,
            id_user
        });
    },
    async index(req,res){
        const {id_user} = req.params;
        const services = await connection('services').where('id_user',id_user).select('services');

        return res.json(services);
    }
}