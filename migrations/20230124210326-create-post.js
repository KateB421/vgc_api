'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      creator: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'Users',
          key:'id',
          as:'creator'
        }
      },
      reference: {
        type: Sequelize.INTEGER
      },
      honors: {
        type: Sequelize.INTEGER
      },
      game: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'Games',
          key:'id',
          as:'game'
        }
      },
      private: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model:'Groups',
          key:'id',
          as:'private'
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
    await queryInterface.dropTable('Posts');
  }
};