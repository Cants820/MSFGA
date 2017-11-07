module.exports = function (sequelize, DataTypes) {
  var UserEvents = sequelize.define("UserEvents", {}, {
    timestamp: false,
    createdAt: false,
    updatedAt: false,
  });
  return UserEvents;
}




