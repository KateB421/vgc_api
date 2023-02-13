'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Game',[{
    id:1,
    title:"General",
    genre:null,
    release:null,
    developer:null,
    publisher:null,
    description:"A place for discussions and questions not relevent to a specific game.",
    createdAt:"2023-02-03 11:57:02.656-08",
    updatedAt:"2023-02-03 11:57:02.657-08"
   },{
    id:2,
    title:"Stardew Valley",
    genre:" Indie game, Role-playing video game, Adventure game",
    release:"February 2016",
    developer:"ConcernedApe",
    publisher:"ConcernedApe",
    description:"Stardew Valley is a simulation role-playing video game developed by Eric \"ConcernedApe\" Barone. Players take the role of a character who inherits their deceased grandfather's dilapidated farm in a place known as Stardew Valley.",
    createdAt:"2023-02-06 00:08:59.703-08",
    updatedAt:"2023-02-06 00:08:59.703-08"}])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
