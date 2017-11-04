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
};

app.post('/register', passport.authenticate('local-signup', {
  successRedirect: '/profile', // redirect to the secure profile section
  failureRedirect: '/index', // redirect back to the signup page if there is an error
  failureFlash: true // allow flash messages
}));

app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile', // redirect to the secure profile section
  failureRedirect: '/index', // redirect back to the signup page if there is an error
  failureFlash: true // allow flash messages
}));