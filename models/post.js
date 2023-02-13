'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Game,{
        foreignKey: 'game',
        onDelete:"CASCADE"
      }),
      Post.belongsTo(models.User,{
        foreignKey: 'creator',
        onDelete:'CASCADE'
      }),
      Post.belongsTo(models.Group,{
        foreignKey:'private',
        onDelete:'CASCADE'
      })
    }
  }
  Post.init({
    content: DataTypes.TEXT,
    creator: DataTypes.INTEGER,
    reference: DataTypes.INTEGER,
    honors: DataTypes.INTEGER,
    game: DataTypes.INTEGER,
    private: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};