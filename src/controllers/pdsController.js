const connection = require('../database/connection');
const crypto = require('crypto');
module.exports = {
    async create(req,res){
        const {nomeCompleto,pontos,RG,CPF,dataNascimento,genero,cidade,UF,rua,cep,email,telefone,nomeBanco,agencia,numeroConta,senha} = req.body;

        const id = crypto.randomBytes(4).toString("HEX"); // gerando ID unico para o PDS
        
        await connection('pds').insert({
            id,
            nomeCompleto,
            pontos,
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
            nomeBanco,
            agencia,
            numeroConta,
            senha
        });
          
        return res.send("Cadastrado com sucesso");
    },
    async index(req,res){
        const pds = await connection('pds').select('*');

        return res.json(pds);
    },
    async delete(req,res){
        const {id} = req.params;
        console.log(id);
        await connection('pds').where('id',id).delete();
        return res.status(204).send();

    }
}