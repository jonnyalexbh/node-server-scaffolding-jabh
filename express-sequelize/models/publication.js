'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Publication.belongsTo(models.Author);
    }
  };
  Publication.init({
    author_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publication',
    tableName: 'publications',
    underscored: true,
  });
  return Publication;
};
