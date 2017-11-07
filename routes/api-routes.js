var db = require("../models");

// Routes
// =============================================================
module.exports = function (app, passport, exphbs) {

// render login page (index.handlebars)
  app.get("/", function(req,res){
    res.render("index", exphbs);
  })
  app.get("/dashboard", function (req, res) {
    res.render("dashboard", exphbs);
  })
  // GET route for getting all of the dbName
  app.get("/users", function (req, res) {
    db.User.findAll({})
    .then(function(User) {
      res.json(User);
      console.log("user");
    });
  });

  // Get route for returning dbName of a specific category
  app.get("/user/:id/edit", function (req, res) {
    db.User.update(req.body,
    {
      where: {
        id: req.params.id
      }
      }).then(function(User) {
        res.json(User);
      });
  });

  // Get rotue for retrieving a single post
  app.get("/user/:id/", function (req, res) { //for profile page
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(User) {
      res.json(User);
    });
  });

  app.post("/user/:id/event", function (req, res) {

  });

  app.get("/user/:id/events", function (req, res) {

  });

  app.get("/user/:id/events/:eventid", function (req, res) {


  });

  app.get("/user/:id/event/new", function (req, res) {
    res.render("createEvent", exphbs);
    
  });

   app.get("/events", function(req,res) {//works and tested
    db.Events.findAll({}).then(function (tableName){
      res.json(tableName);
      console.log(res);
    });
  });

  app.get("/events/:id", function (req, res) {
    db.Events.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(Events) {
      res.json(Events);
    });
  });

 
  app.post("/event/create", function (req, res) {//re-factor
    console.log(req.body);
    db.Volunteer.create({
      activity: req.body.activity,
      description: req.body.description,
      location: req.body.location,
      date: req.body.date
    })
      .then(function (dbEvent) {
        res.json(dbEvent);
      });
  });
  // DELETE route for deleting dbName
  app.delete("/user/event/:id", function (req, res) {
    db.Volunteer.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbEvent) {
        res.json(dbEvent);
      });
  });

  // PUT route for updating dbName
  app.put("/user/:id/event/:eventid/join", function (req, res) {


  });


};
