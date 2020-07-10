module.exports = function (sequelize, DataTypes) {
  const Paraiso = sequelize.define("Paraiso", {
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
        type: DataTypes.STRING,
        allowNull: true,
        len: [1, 300]
     },
     price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
    }
  }, {
    freezeTableName: true
  });
  
  return Paraiso;
};