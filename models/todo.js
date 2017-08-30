'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    item: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    completedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Todo;
};