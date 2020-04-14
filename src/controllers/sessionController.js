const connection = require('../database/connection');
module.exports = {
    async create(req,res){
        const {email,senha} = req.body;


        const pds = await connection('pds')
            .where({email:email, senha:senha})
            .select('*')
            .first();


        if(!pds){
            return res.status(400).json({error: 'No ong found with this ID'})
        }

        return res.json(pds);
    }

}