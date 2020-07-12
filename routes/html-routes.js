// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
// PASSPORT
  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login")
  })

  app.get("/signup", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  // INTRO-PAGE
  app.get("/", (req, res) => {
      res.render("intro-page", {
    })
  });

  // COMMAND CONTROL
  app.get("/view-menu", (req, res) => {
    db.Paraiso.findAll().then(menu => {
      // res.json(menu)
      // console.log(menu);
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
    })
  });
  
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("paraiso-comm-control");
  });

  app.get('/view-menu', isAuthenticated, (req, res) => {
    res.render('view-menu');
  });

  app.get('/add-to-menu', isAuthenticated, (req, res) => {
    res.render('add-to-menu');
  });
};
