// config/passport.js

// load all the things we need
// var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// load up the user model
var db = require('../models/index');

var configAuth = require("./auth");
// expose this function to our app using module.exports
module.exports = function (passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    db.User.findById(id).then(function (user) {
      done(null, user);
    })
  });

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'
  console.log(configAuth);
  passport.use(new GoogleStrategy({
      // by default, local strategy uses username and password, we will override with email
      clientID: configAuth.googleAuth.clientID,
      clientSecret: configAuth.googleAuth.clientSecret,
      callbackURL: configAuth.googleAuth.callbackURL
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      process.nextTick(function () {
        console.log("try to find user");
        db.User.findOne({
          where: {
            "userName": profile.displayName
          }
        }).then(function (user) {
          if (user) {
            console.log("user found!");
            return done(null, user);
          } else {
            db.User.create({
              "userName": profile.displayName,
              "email": profile.emails[0].value, // might not work
            }).then(function (data) {
              console.log("done creating a new user")
              console.log(data);
              return done(null, data);
            })
          }
        });
      })
    }
  ));
}