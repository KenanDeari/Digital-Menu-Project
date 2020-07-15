// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = app => {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

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
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Paraiso Routes -----------------------------------------------------------
  // GET
  // app.get("/api/view-menu", (req, res) => {
  //   db.Paraiso.findAll()
  //     .then(menu => {     
  //     res.render("/api/view-menu", {
  //     menu
  //     })
  //   })
  //   .catch(err => console.log(err));
  // });

  // GET
  app.get("/api/view-menu", (req, res) => {
    db.Paraiso.findAll()
      .then(menu => {     
      res.send(menu)
    })
    .catch(err => console.log(err));
  });

  // GET ONE
  app.get("/api/view-menu/:id", (req, res) => {
    db.Paraiso.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(menu => {     
      res.send(menu)
    })
    .catch(err => console.log(err));
  });



  // POST
  app.post("/api/add-to-menu", (req, res) => {
    db.Paraiso.create({
      section: req.body.section,
      item: req.body.item,
      descrip: req.body.descrip,
      price: req.body.price
    })
      .then(() => {
         res.redirect(307, "/view-menu");
        // res.status(200);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // UPDATE
  app.put("/api/view-menu", (req, res) => {
    db.Paraiso.findAll().then(menu => {
      // res.json(menu);
      res.render("/api/add-to-menu", {

      });
    });
  });
  console.log(db.Paraiso.id);
  // DELETE
  app.delete("/api/view-menu/:id", (req, res) => {
    db.Paraiso.destroy({
      where: {
        id: $(this).id
      }
    }).then(function(dbParaiso) {
      res.json(dbParaiso);
    });
  });

  // app.delete("/api/view-menu/:id", (req, res, next) => {
  //   db.Paraiso.destroy({
  //     where: {
  //       // id: req.body.id,
  //       id: req.params.id
  //     }
  //   })
  //     .then(db.Paraiso.findById(req.params.id))
  //     .then(() => {
  //       res.redirect(307, "/api/view-menu");
  //     })
  // });

  // UPDATE
  app.put("/api/view-menu/:id", (req, res) => {
    db.Paraiso.update(
      {
        section: req.body.section,
        item: req.body.item,
        descrip: req.body.descrip,
        price: req.body.price
      },
      {
        WHERE: req.params.id
      })
      .then(db.Paraiso.findById(req.params.id))
      .then(dbParaiso => {
        res.json(dbParaiso)
      });
  });
};


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
