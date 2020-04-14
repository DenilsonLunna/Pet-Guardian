const connection = require('../database/connection');
module.exports = {
    async create(req,res){
        const {email,senha} = req.body;


        const user = await connection('user')
            .where({email:email, senha:senha})
            .select('*')
            .first();

        if(!user){
            return res.status(400).json({error: 'Not found'})
        }

    
        return res.json(user);
        

       
    }

}