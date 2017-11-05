var Sequelize = require("sequelize");
var bcrypt = require("bcrypt-nodejs");

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

module.exports = function (Sequelize, DataTypes, User) {
  var User = Sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 20]
      }
    },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [8, 100]
    //   }
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
         isNumeric: true
      }
    }
  });
  
  return User;
};

//test