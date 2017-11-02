var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the dbName
  app.get("/api/dbName/", function (req, res) {
    db.dbName.findAll({})
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning dbName of a specific category
  app.get("/api/dbName/category/:category", function (req, res) {
    db.dbName.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // Get rotue for retrieving a single post
  app.get("/api/dbName/:id", function (req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/dbName", function (req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting dbName
  app.delete("/api/dbName/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating dbName
  app.put("/api/dbName", function (req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });
};