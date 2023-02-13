'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.hasMany(models.GroupJoin,{
        foreignKey: 'groupID'
      }),
      Group.hasMany(models.Post,{
        foreignKey:'private'
      })
    }
  }
  Group.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    maxmember: DataTypes.INTEGER,
    language: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};