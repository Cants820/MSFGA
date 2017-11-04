var Sequelize = require("sequelize");
var bcrypt = require("bcrypt-nodejs");
module.exports = function (Sequelize, DataTypes) {
  var User = Sequelize.define("User", {
    // userName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [8, 20]
    //   }
    // },
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
    // points: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   validate: {
    //      isNumeric: true
    //   }
    // }
  });
  User.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  User.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
  };
  return User;
};

//test