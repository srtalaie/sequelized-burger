module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
      name: {
        type: DataTypes.STRING,
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }, { timestamps: false });
    return Burgers;
  };
  