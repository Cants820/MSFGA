var db = require("../models");

// Routes
// =============================================================
module.exports = function (app, passport, exphbs) {

// render login page (index.handlebars)
  app.get("/", function(req,res){
    res.render("index", exphbs);
  })
  app.get("/dashboard", function (req, res) {
 var loc = [];
          var placeId = [];
          var globalResult; 
          // console.log(globalResult)
         
          function initMap() {
            
            myLatLng = {lat: 37.7749, lng: -122.431297}
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 12,
              center: myLatLng
            });
            var geocoder = new google.maps.Geocoder;
            var infowindow = new google.maps.InfoWindow;
            document.getElementById('submit').addEventListener('click', function(event) {
              event.preventDefault()
              geocodeAddress(geocoder, map, infowindow);
              // console.log(geocoder)
              // console.log(infowindow)
              // console.log(map)
              
            });
            var newAutocomplete = new google.maps.places.Autocomplete(document.getElementById('address'),{types: ['geocode']});
              
              newAutocomplete.addListener('place_changed', () => {
                
              });
          }
          function geocodeAddress(geocoder, resultsMap, infowindow) {
            var address = document.getElementById('address').value;
            geocoder.geocode({'address': address}, function(results, status) {
              // var latlng = [(results[0].geometry.bounds.f.f),(results[0].geometry.bounds.b.b)]
              // console.log(latlng);
              globalResult = results; 
              // console.log(globalResult)
              var id = (globalResult[0].place_id)
              placeId.push(id)
              
              if (status === 'OK') {
                var marks = (results[0].formatted_address)
                console.log(marks)
                loc.push(marks);
                resultsMap.setCenter(results[0].geometry.location); 
                var marker = new google.maps.Marker({
                  map: resultsMap,
                  animation: google.maps.Animation.DROP,
                  position: results[0].geometry.location
                }); 
                google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, this);
            });
              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });
          }
        




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
  app.get("/profile/", function(req, res) {
    
    var userArray = [];

    db.User.findAll({})
      .then(function(user)
      {
        // console.log(user)
        for (var i=0; i < user.length;i++){
          
          var userObj = {
            id: user[i].id,
            userName: user[i].userName,
            email: user[i].email,
            points: user[i].points,
          }
          
          userArray.push(userObj);
        }
        console.log(userArray);
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
      activityName: req.body.activityName,
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
