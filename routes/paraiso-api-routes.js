const db = require("../models");

// Routes
module.exports = app => {

  // GET
  app.get("/api/paraiso", (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.AuthorId = req.query.user_id;
    }
    db.Paraiso.findAll({
      where: query,
      include: [db.User]
    }).then(dbParaiso => {
      res.json(dbParaiso);
    });
  });

  // POST
  app.post("/api/paraiso", (req, res) => {
    db.Paraiso.create(req.body).then(dbParaiso => {
      res.json(dbParaiso);
    });
  });

  // PUT
  app.put("/api/paraiso", (req, res) => {
    db.Paraiso.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(dbParaiso => {
      res.json(dbParaiso);
    });
  });
   
  // DELETE
  app.delete("/api/paraiso/:id", (req, res) => {
    db.Paraiso.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbParaiso => {
      res.json(dbParaiso);
    });
  });
};
