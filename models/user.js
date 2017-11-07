var Sequelize = require("sequelize");


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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    eventsAttending: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  User.associate = function (models) {
    User.belongsToMany(models.Events, {
      through: {
        model: models.UserEvents
      }
    });
  }
  return User;
}