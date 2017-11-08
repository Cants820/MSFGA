var Sequelize = require("sequelize");
module.exports = function (Sequelize, DataTypes) {
  var Events = Sequelize.define("Events", {
    activityName: {
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
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    }
  });
  Events.associate = function (models) {
    Events.belongsToMany(models.User, {
      through: {
        model: models.UserEvents
      }
    });
  }
  return Events;
}
