// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = app => {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Paraiso Routes
  app.get("/api/view-menu", (req, res) => {
    db.Paraiso.findAll().then(menu => {
      // res.json(menu);
      res.render("view-menu", {
        
      });
    });
  });

  app.post("/api/add-to-menu", (req, res) => {
    db.Paraiso.create(req.body).then(dbParaiso => {
      res.json(dbParaiso);
    })
  })
};

  // added this morning ---------------- check if works
   // GET
  // app.get("/api/paraiso", (req, res) => {
  //   const query = {};
  //   if (req.query.user_id) {
  //     query.AuthorId = req.query.user_id;
  //   }
  //   db.paraiso.findAll({
  //     where: query,
  //     include: [db.User]
  //   }).then(dbParaiso => {
  //     res.json(dbParaiso);
  //   });
  // });

  // POST
  // app.post("/api/paraiso", (req, res) => {
  //   db.paraiso.create(req.body).then(dbParaiso => {
  //     res.json(dbParaiso);
  //   });
  // });

  // PUT
  // app.put("/api/paraiso", (req, res) => {
  //   db.paraiso.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(dbParaiso => {
  //     res.json(dbParaiso);
  //   });
  // });
   
  // DELETE
//   app.delete("/api/paraiso/:id", (req, res) => {
//     db.paraiso.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(dbParaiso => {
//       res.json(dbParaiso);
//     });
//   });
// };
