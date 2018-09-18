const {Client} = require('pg');
const client = new Client();

client.connect();

const query(SELECT * FROM ${database}, [possible params]);

const res = await client.query(query);
console.log(res.rows[0].message);
await client.end();
