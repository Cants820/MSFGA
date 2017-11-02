module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        lens: [3, 10]
      }
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    points: {
      type: DataType.INT,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    }
  });
  return User;
};