exports.up = function(knex, Promise) {
  return knex.schema.alterTable('milestone', function(table) {
    table.integer('famous_person_id');

    table.foreign('famous_person_id').references('id').inTable('famous_people')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('milestone', function(table) {
   table.dropColumn('famous_person_id');
  });
};
