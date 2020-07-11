// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/intro-page.html"));
  });

  // app.get("/index")

  // app.get("/login", (req, res) => {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // app.get("/signup", (req, res) => {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/paraiso-comm-control.html"));
  // });


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
  // app.get("/", isAuthenticated, (req, res) => {
  //   db.Paraiso.findAll().then(() => {
  //     res.render("intro-page", {
  //     })
  //   })
  // });

  // COMMAND CONTROL
  app.get("/view-menu", isAuthenticated, (req, res) => {
    db.Paraiso.findAll().then(menu => {
      res.render("view-menu", {
        // menu
      })
    })
  });
  
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("paraiso-comm-control");
  });

  app.get('/view-menu', (req, res) => {
    res.render('view-menu');
  });

  app.get('/add-to-menu', (req, res) => {
    res.render('add-to-menu');
  });
};
