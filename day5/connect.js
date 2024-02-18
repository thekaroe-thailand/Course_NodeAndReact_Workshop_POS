const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_node_react', 'tavonseesenpila', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize;

