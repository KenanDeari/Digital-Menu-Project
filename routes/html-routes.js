// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
// PASSPORT
  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/view-menu");
    }
    res.render("login", {layout: "main-no-buttons"})
  })

  app.get("/signup", (req, res) => {
    if (req.user) {
      res.redirect("/view-menu");
    }
    res.render("signup", {layout: "main-no-buttons"});
  });

  // INTRO-PAGE
  app.get("/", (req, res) => {
      res.render("intro-page", {layout: "main-empty"})
  });

  // COMMAND CONTROL
  app.get("/view-menu", isAuthenticated, (req, res) => {
    db.Paraiso.findAll().then(menu => {
      const paraisoNew = {
        menu: menu.map(item => {
          return {
            id: item.id,
            section: item.section,
            item: item.item,
            descrip: item.descrip,
            price: item.price
          }
        })
      }
      res.render("view-menu", {
        menu: paraisoNew.menu
      })
    });
  });

  app.get("/add-to-menu", isAuthenticated, (req, res) => {
    res.render('add-to-menu');
  });

  // Update Form
  app.get("/view-menu/:id", (req, res) => {
    db.Paraiso.findOne({
      where: {
        id: req.params.id
      }
    }).then(menu => {
      const paraisoUpdate = {
        menu: menu.map(item => {
          return {
            // id: item.id,
            section: item.section,
            item: item.item,
            descrip: item.descrip,
            price: item.price
          }
        })
      }
      res.render("view-menu", {
        menu: paraisoUpdate.menu
      })
    });
  });

  
};