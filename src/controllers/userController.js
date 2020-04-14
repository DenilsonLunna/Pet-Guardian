const connection = require('../database/connection');
const crypto = require('crypto');
module.exports = {
    async create(req,res){
        const {nomeCompleto,RG,CPF,dataNascimento,genero,cidade,UF,rua,cep,email,telefone,senha} = req.body;

        const id = crypto.randomBytes(4).toString("HEX"); // gerando ID unico para o PDS
        
        await connection('user').insert({
            id,
            nomeCompleto,
            RG,
            CPF,
            dataNascimento,
            genero,
            cidade,
            UF,
            rua,
            cep,
            email,
            telefone,
            senha
        });
          
        return res.send("Cadastrado com sucesso");
    },
    async index(req,res){
        const users = await connection('user').select('*');

        return res.json(users);
    },
    async delete(req,res){
        const {id} = req.params;
        await connection('user').where('id',id).delete();
        return res.status(204).send();

    }
}