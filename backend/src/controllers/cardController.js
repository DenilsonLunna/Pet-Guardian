const connection = require('../database/connection');

module.exports = {
    async create(req,res){
        const {nomeBanco, agencia, numeroConta} = req.body;
        const id_user = req.headers.authorization;
        await connection('card').insert({
            nomeBanco,
            agencia,
            numeroConta,
            id_user
        })
       
        return res.json({res:'cartão cadastrado'});
    },
    async delete(req,res){
        const {id_user_card} = req.params;
        await connection('card').where('id_user',id_user_card).delete();

        return res.status(204).send();
    },
    async alterar(){
        
    },
    async index(req,res){
        const users = await connection('card').select('*');
        return res.json(users);
    }

}