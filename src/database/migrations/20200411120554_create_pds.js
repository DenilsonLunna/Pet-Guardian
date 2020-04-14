
exports.up = function(knex) {
    return knex.schema.createTable('pds',function (table){
        table.string('id').primary();
        table.string('nomeCompleto').notNullable();
        table.string('pontos');
        table.string('RG').notNullable();
        table.string('CPF').notNullable();
        table.string('dataNascimento').notNullable();
        table.string('genero');
        table.string('cidade').notNullable();
        table.string('UF',2).notNullable();
        table.string('rua').notNullable();
        table.string('cep').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('nomeBanco');
        table.string('agencia');
        table.string('numeroConta');
        table.string('senha');
    })
};

exports.down = function(knex) {
    return knex.schema.droptable('pds');
};
