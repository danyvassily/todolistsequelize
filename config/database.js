const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_database', 'root', 'azerty12', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;