module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define("Post", {
    section: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 50]
     },
     descrip: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [1, 300]
     },
     price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
     }
  });
  return Post;
};