var path = require("path");
var exphbs = require("express-handlebars");

// Routes
// =============================================================
module.exports = function (app, passport) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html(sing in pg)
  // app.get("/", function (req, res) {
  //   res.render("index", exphbs);
  // })
  // // create route loads create.html
  // app.get("/create", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/create.html"));
  // });

  // app.get("/view", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/view.html"));
  // });

  // app.get('/dashboard', function (req, res) {
  //   res.sendFile(path.join(__dirname, "../views/partials/dashboard"));
  // });
  // app.get('/logout', function (req, res) {
  //   req.logout();
  //   res.redirect('/');
  // });
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  // the callback after google has authenticated the user
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/dashboard',
      failureRedirect: '/auth/google'
    }));

    // app.get('/auth/google',
    //   passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));
    
    // app.get('/auth/google/callback',
    //   passport.authenticate('google', { failureRedirect: '/login' }),
    //   function (req, res) {
    //     // Successful authentication, redirect home.
    //     res.redirect('/');
    //   });
    // route middleware to make sure a user is logged in
    // function isLoggedIn(req, res, next) {
    
    //   // if user is authenticated in the session, carry on
    //   if (req.isAuthenticated())
    //     return next();
    
    //   // if they aren't redirect them to the home page
    //   res.redirect('/');
    // };
};


