
exports.up = function(knex) {
  return knex.schema.createTable('services',function(table) {
    table.string('services').notNullable();
    table.string('id_user').notNullable();
    table.foreign('id_user').references('user.id');


  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('services');
};
