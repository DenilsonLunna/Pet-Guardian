const connection = require('../database/connection');
const cardController = require('./cardController');
const crypto = require('crypto');
module.exports = {
    async create(req,res){
        const {nomeCompleto,RG,CPF,dataNascimento,genero,cidade,UF,rua,cep,email,telefone,nomeBanco,agencia,numeroConta,senha}  = req.body;

        const id = crypto.randomBytes(4).toString("HEX"); // gerando ID unico para o PDS
        const tipo = 'fazer logica para decidir qual tipo de usuario ele é';
        await connection('user').insert({
            id,
            tipo,
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
        if(nomeBanco != null && agencia != null && numeroConta != null){
            const id_user = id;
            await connection('card').insert({
                nomeBanco,
                agencia,
                numeroConta,
                id_user
            })
        }
        return res.send("Cadastrado com sucesso");
          
        
    },
    async index(req,res){
        const users = await connection('card').select('*');
        return res.json(users);
    },
    async delete(req,res){
        const {id} = req.params;
        await connection('user').where('id',id).delete();
        return res.status(204).send();
    }
}