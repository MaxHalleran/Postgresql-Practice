const query = require('./knexsql/query');
const input = require('./knexsql/input');

const famousLookup = function famousLookup(par1, par2) {
  console.log(par1, par2);
  if (par1 === 'query') {
    console.log('Searching ...');
    query(par2);
  } else if (par1 === 'input') {
    console.log('Updating...');
    input(par2);
  }
};

famousLookup(process.argv.slice(2, 3).join(''), process.argv.slice(3).join(' '));
