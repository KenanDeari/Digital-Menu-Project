module.exports = function (sequelize, DataTypes) {
  let Paraiso = sequelize.define("paraiso", {
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
  return Paraiso;
};