exports.up = function(knex, Promise) {
  return knex.schema.createTable('milestone', function (table) {
    table.increments().primary();
    table.string('description');
    table.date('date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('milestone');
};
