'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SavedPost.belongsTo(models.User,{
        foreignKey: 'user',
        onDelete:'CASCADE'
      }),
      SavedPost.belongsTo(models.Post,{
        foreignKey:'post',
        onDelete:'CASCADE'
      })
    }
  }
  SavedPost.init({
    user: DataTypes.INTEGER,
    post: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SavedPost',
  });
  return SavedPost;
};