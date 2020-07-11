const db = require("../models");

// Routes
module.exports = app => {

  // GET
  app.get("/api/posts", (req, res) => {
    const query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    db.Post.findAll({
      where: query,
      include: [db.Author]
    }).then(dbPost => {
      res.json(dbPost);
    });
  });

  // POST
  app.post("/api/posts", (req, res) => {
    db.Post.create(req.body).then(dbPost => {
      res.json(dbPost);
    });
  });

  // PUT
  app.put("/api/posts", (req, res) => {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(dbPost => {
      res.json(dbPost);
    });
  });
   
  // DELETE
  app.delete("/api/posts/:id", (req, res) => {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbPost => {
      res.json(dbPost);
    });
  });
};
