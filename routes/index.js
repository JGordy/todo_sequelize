const express = require("express")
const  router = express.Router();
const models  = require("../models/index")


router.get("/", function(req, res) {
  models.Todo.findAll()
    .then(function(data) {
      res.render("list", {todos: data});
    })
    .catch(function(err) {
      res.redirect("/");
    })
});

router.post("/create", function(req, res) {
  let todo = models.Todo.create({
    item: req.body.item,
  })
    .then(function(data) {
      res.redirect("/");
    })
    .catch(function(err) {
      res.redirect("/");
    })
});

// and another post request
router.post("/complete/:id", function(req, res) {
  models.Todo.update({
    completed: true,
    completedAt: Date.now()
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function(data) {
    console.log(data);
    res.redirect("/");
  })
  .catch(function(err) {
    res.redirect("/");
  })
});

router.post("/edit/:id", function(req, res) {
  models.Todo.update({
    item: req.body.item
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function(data) {
    res.redirect("/");
  });
});

router.get("/remove/:id", function(req, res) {
  models.Todo.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(data) {
    console.log(data);
    res.redirect("/");
  })
});



module.exports = router;
