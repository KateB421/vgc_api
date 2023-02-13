'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupJoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GroupJoin.belongsTo(models.User,{
        foreignKey: 'userID',
        onDelete: 'CASCADE'
      }),
      GroupJoin.belongsTo(models.Group,{
        foreignKey: 'groupID',
        onDelete: 'CASCADE'
      })
    }
  }
  GroupJoin.init({
    userID: DataTypes.INTEGER,
    admin: DataTypes.BOOLEAN,
    groupID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GroupJoin',
  });
  return GroupJoin;
};