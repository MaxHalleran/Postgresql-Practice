const client = require('./client.js');

client.connect((err) => {
  if (err) {
    return console.error('Connection Error', err);
  }
  client.query('SELECT $1::int AS number', ['1'], (err, result) => {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].number);
    console.log(result);
    client.end();
  });
});

// const query(SELECT * FROM ${database}, [possible params]);
//
// const res = await client.query(query);
// console.log(res.rows[0].message);
// await client.end();
console.log(process.argv[2]);
