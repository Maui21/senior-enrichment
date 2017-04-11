var Sequelize = require('sequelize')
var db = require('../index.js')

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    isEmpty: false
  },
  image: {
    type: Sequelize.STRING, //For now
    picture: 'An image'
  }
})

module.exports = Campus
