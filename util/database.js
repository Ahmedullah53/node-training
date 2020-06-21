const Sequelize = require('sequelize')

const sequelize = new Sequelize('prac', 'root', 'toor', {dialect: 'mysql', host: 'localhost'})

module.exports = sequelize