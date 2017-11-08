var path = require("path");
var exphbs = require("express-handlebars");

// Routes
// =============================================================
module.exports = function (app, passport) {

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/dashboard',
      failureRedirect: '/auth/google'
    }));
};


