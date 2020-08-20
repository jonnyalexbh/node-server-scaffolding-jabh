'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Author.hasMany(models.Publication, {
        foreignKey: 'authorId'
      });
    }
  }
  Author.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Author',
    tableName: 'authors',
    underscored: true,
  });
  return Author;
};
