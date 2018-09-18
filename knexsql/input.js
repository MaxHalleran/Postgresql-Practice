const knex = require('./client');

const clientInput = function clientInput(input) {
  let person = input.split(' ');
  console.log(person);

  // We are inserting a new famous person so we have to check that all three fields are filled out or reject the attempt.
  if (person.length < 3) {
    console.log('All fields weren\'t filled out. Ensure that a first name, last name and a date of birth are entered.');
    return false;
  }

  // Now we insert the new person into the database
  knex
    .from('famous_people')
    .insert({
      first_name: person[0],
      last_name: person[1],
      birthdate: person[2],
    })
    .finally(() => {
      knex.destroy();
    });
    return true;
};

module.exports = clientInput;
