const query = require('./knexsql/query');

const famousLookup = function famousLookup(input) {
  console.log('Searching ...');
  query(input);
};

famousLookup(process.argv.slice(2).join(' '));
