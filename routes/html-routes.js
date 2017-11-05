var path = require("path");

// Routes
// =============================================================
module.exports = function (app, passport) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html(sing in pg)
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // create route loads create.html
  app.get("/create", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  app.get('/profile', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  // the callback after google has authenticated the user
  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/profile',
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


