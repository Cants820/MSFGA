var db = require("../models");

// Routes
// =============================================================
module.exports = function (app, passport) {

  // GET route for getting all of the dbName
  app.get("/users", function (req, res) {
    // db.Volunteer.findAll({})
    //   .then(function (dbVolunteer) {
    //     res.json(dbVolunteer);
    //   });
  // console.log("Hello world");
  });

  // Get route for returning dbName of a specific category
  app.get("/user/:id/edit", function (req, res) {
    // db.dbName.findAll({
    //   where: {
    //     activity: req.params.activity
    //   }
    // })
    //   .then(function (dbVolunteer) {
    //     res.json(dbVolunteer);
    //   });
    // console.log("Hello where");
  });

  // Get rotue for retrieving a single post
  app.get("/user/:id/", function (req, res) {
    // db.Volunteer.findOne({
    //   where: {
    //     id: req.params.id
    //   }
    // })
    //   .then(function (dbVolunteer) {
    //     res.json(dbVolunteer);
    //   });
    // console.log("Hello world");
  });

  app.get("/user/:id/events", function (req, res) {

    // console.log("Hello world");
  });

  app.get("/user/:id/events/:eventid", function (req, res) {

    // console.log("Hello world");
  });

  app.get("/user/:id/event/new", function (req, res) {

    // console.log("Hello world");
  });

  app.get("/events", function (req, res) {

    // console.log("Hello world");
  });

  app.get("/events/:id", function (req, res) {

        // console.log("Hello world");
  });

  app.post("/users", function (req, res) {

  });

  app.post("/user/:id/event", function (req, res) {

  });

  // POST route for saving a new post
  app.post("/user/register", function (req, res) {
    console.log("Create postUserName");
    console.log(req.body);
    db.User.create({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
  app.post("/event/create", function (req, res) {
    console.log(req.body);
    db.Volunteer.create({
      activity: req.body.activity,
      description: req.body.description,
      location: req.body.location,
      date: req.body.date
    })
      .then(function (dbVolunteer) {
        res.json(dbVolunteer);
      });
  });
  // DELETE route for deleting dbName
  app.delete("/user/Volunteer/:id", function (req, res) {
    db.Volunteer.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbVolunteer) {
        res.json(dbVolunteer);
      });
  });

  // PUT route for updating dbName
  app.put("/user/:id/", function (req, res) {
    // db.Post.update(req.body,
    //   {
    //     where: {
    //       id: req.body.id
    //     }
    //   })
    //   .then(function (dbVolunteer) {
    //     res.json(dbVolunteer);
    //   });
    // console.log("Hello world");
  });

  app.put("/user/:id/event/:eventid/join", function (req, res) {


  });


};