exports.up = function(knex, Promise) {
  return knex.schema.alterTable('famous_people', function(table) {
    table.increments('id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('famous_people', function(table) {
    table.dropColumn('id');
  })
};
