module.exports = (sequelize, DataTypes) => {
  const Paraiso = sequelize.define("Paraiso", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  }, {
    freezeTableName: true
  });
  
  return Paraiso;
};