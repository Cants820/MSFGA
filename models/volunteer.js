module.exports = function (sequelize, DataTypes) {
  var Volunteer = sequelize.define("Volunteer", {
    activity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [10]
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {

      }
    },
    Date: {
      type: DataTypes.,
      allowNull: false,
      validate: {

      }
    },

  });
  return Volunteer;
};