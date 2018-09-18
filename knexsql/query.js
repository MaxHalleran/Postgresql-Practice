const knex = require('./client');

const clientQuery = function clientQuery(input) {
  knex
    .where('first_name', input)
    .select()
    .from('famous_people')
    .then((result) => {
      // The first response line
      console.log(`Found ${result.length} person(s) by the name '${input}'`);

      // outputting the search results. Wow, I did a search.
      // Dayum, that's like all of bread right there.
      let counter = 0;
      result.forEach((person) => {
        console.log(`- ${++counter}: ${person.first_name} ${person.last_name}, born '${person.birthdate}'`);
      });

      if (result.length === 0) {
        console.log('We couldn\'t find anything, would you like to try again? This program is case sensitive');
      }
    })
    .finally(() => {
      knex.destroy();
    });
  return true;
};

module.exports = clientQuery;
