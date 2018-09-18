const client = require('./client');

const clientQuery = function clientQuery(input) {
  client.connect((err) => {
    if (err) {
      return console.error('Connection Error', err);
    }
    client.query('SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name = $1::text', [input], (err, result) => {
      if (err) {
        return console.error('error running query', err);
      }

      // Lets start filling this program in!
      console.log(`Found ${result.rows.length} person(s) by the name '${input}'`)

      // The information presenting section. Also a counting variable just cuz.
      let counter = 0;
      result.rows.forEach((row) => {
        console.log(`- ${++counter}: ${row.first_name} ${row.last_name}, born '${row.birthdate}'`);
      })

      // The client.end cuts the connection to the database. I would prefer to open and
      // close the connection with every query to ensure the connection is not accidently left open.
      client.end();
      return true;
    });
    return true;
  });
};

module.exports = clientQuery;
