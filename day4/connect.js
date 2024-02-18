const {Client} = require('pg')
 
const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'db_node_react',
  user: 'tavonseesenpila',
  password: '1234',
});

module.exports = client;