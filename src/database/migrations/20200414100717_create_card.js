
exports.up = function(knex) {
    return knex.schema.createTable('card',function (table){
        table.string('nomeBanco');
        table.string('agencia');
        table.string('numeroConta');
        table.string('id_user');
        
    })
};

exports.down = function(knex) {
    return knex.schema.droptable('card');
};
