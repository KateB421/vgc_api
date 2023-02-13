'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GroupJoins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model: 'Users',
          key: 'id',
          as: 'userID'
        }
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      groupID: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'Groups',
          key:'id',
          as:'groupID'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GroupJoins');
  }
};