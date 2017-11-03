var Sequelize = require("sequelize");


module.exports = function (Sequelize, DataTypes) {
  var Volunteer = Sequelize.define("Volunteer", {
    activity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 100]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [10, 1000]
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {

      }
    },
    date: {
      type: DataTypes.DATE,
      
    },

  });
  return Volunteer;
};