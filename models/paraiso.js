module.exports = (sequelize, DataTypes) => {
  const Paraiso = sequelize.define("Paraiso", {
    section: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 60]
      }
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 60]
    },
    descrip: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1, 300]
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 10]
    }
  }, {
    freezeTableName: true
  });
  
  return Paraiso;
};