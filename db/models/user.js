'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
    unique: true

  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})
