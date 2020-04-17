const connection = require('../database/connection');

module.exports = {
    async listPds(req,res){
        const filter = req.body;
        const id_user = req.headers.authorization;
        const pds = await connection('user').innerJoin('services', 'user.id', 'services.id_user').select('nomeCompleto','pontos','cidade','services');
                            
                            
                        

        return res.json(pds);
    }
}