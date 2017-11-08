var db = require("../models");

// Routes
// =============================================================
module.exports = function (app, passport, exphbs) {

// render login page (index.handlebars)
  app.get("/", function(req,res){
    res.render("index", exphbs);
  })
  app.get("/dashboard", function (req, res) {

    var eventsArray = [];

    db.Events.findAll({

    }).then(function(events){

      for (var i =0; i < events.length; i++) {

        var eventObj = {
          id: events[i].id,
          activity: events[i].activityName,
          description: events[i].description,
          location: events[i].location,
          date: events[i].date
        }
      console.log(eventObj)
      eventsArray.push(eventObj);
      }

        res.render("dashboard", {events:eventsArray});
    })

  })
  app.get("/profile/:id", function(req, res) {
    console.log("=============");
    console.log(res);
    console.log("============="); 
    var userArray = [];

    db.User.findAll({
      where: {
        id:id
      }
    }).then(function(users){

      for (var i =0; i < users.length;i++){

        var userObj = {
          id: users[i].id,
          userName: user[i].userName,
          email: user[i].email,
          points: user[i].points,
        }
        userArray.push(userObj);
      }
      res.render("profile", {users:userArray});

    })




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

  app.post("/user/:id/event/new", function (req, res) {

    db.Events.create({
      activityName: req.body.activityName,
      description: req.body.description,
      location: req.body.location,
      date: req.body.date,
    }).then(function(dbEvent1) {
      db.UserEvents.create({
        UserId: req.body.UserId,
        EventId: dbEvent1.dataValues.EventId
      }).then(function(pair) {
        res.json(dbEvent1);
      })
    });
  });

  //get users id with events
  app.get("/user/:id/events/new", function (req, res) {
    
    // var id = req.params.id;

    // db.User.findOne({
    //   include: [{
    //     model: Project,
    //     through: {
    //       attributes: ["","",""],
    //       where: {completed:true}
    //     }
    //   }]
    //  });
          
  });

  app.get("/events/:id/users/:id", function (req,res) {

  })

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
    db.Events.create({
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

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });


};
