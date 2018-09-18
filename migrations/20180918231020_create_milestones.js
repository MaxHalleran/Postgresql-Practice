// We need to implement a fuction that adds a 'milestone' table to the database.
// This table needs a description (string) and a date.
// and of course a unique id. Well, at least for now.
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
