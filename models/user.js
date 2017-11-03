var Sequelize = require("sequelize");
module.exports = function (Sequelize, DataTypes) {
  var User = Sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 20]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        // isNumeric: true
      }
    }
  });
  return User;
};

//test