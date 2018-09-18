const query = require('./query.js');

const famousLookup = function famousLookup(input) {
  query(input);
};

console.log('Searching...');

famousLookup(process.argv.slice(2).join(' '));
