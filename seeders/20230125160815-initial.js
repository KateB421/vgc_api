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
    await queryInterface.bulkInsert('Games',[{
      id:1,
      title:"General",
      genre:null,
      release:null,
      developer:null,
      publisher:null,
      description:"A place for discussions and questions not relevent to a specific game.",
      createdAt:new Date(),
      updatedAt:new Date()
     },{
      id:2,
      title:"Stardew Valley",
      genre:" Indie game, Role-playing video game, Adventure game",
      release:"February 2016",
      developer:"ConcernedApe",
      publisher:"ConcernedApe",
      description:"Stardew Valley is a simulation role-playing video game developed by Eric \"ConcernedApe\" Barone. Players take the role of a character who inherits their deceased grandfather's dilapidated farm in a place known as Stardew Valley.",
      createdAt:new Date(),
      updatedAt:new Date()
    }])
    
    await queryInterface.bulkInsert('Groups',[{
      id:1,
      name:"public",
      description:null,
      private:false,
      maxmember:null,
      language:null,
      createdAt:new Date(),
      updatedAt:new Date()
    }])

    await queryInterface.bulkInsert('Users',[
      {
        id:5,
        username:"KateB",
        password:"$2b$10$HQwFDWUn6Wo5H91yBRJvkuWkOo/5Kr1mRE8U7oUhX400/MLiTy4Uq",
        bio:"Creator of this website. Video games can be art. ",
        interests:"Indie, Stylistic, RPG  ",
        email:"kmburton421@gmail.com",
        createdAt:new Date(),
        updatedAt:new Date
      },{
        id:7,
        username:"ATotalGamer",
        password:"$2b$10$Yczs8V1XtPSlcx7qsMx2ZO3It.LIkxok.m1gJ1HtTxxe3mA0VqGo2",
        bio:"Played games since yesterday.",
        interests:"Indie games, switch",
        email:"gamer@gamer.com",
        createdAt:"2023-02-06 08:49:37.649-08",
        updatedAt:"2023-02-06 08:49:37.65-08"
      }
    ])

    await queryInterface.bulkInsert('Posts',[
      {
        id:4,
        content:"Introduce yourself here!",
        creator:5,
        reference:0,
        honors:0,
        game:1,
        private:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        id:9,
        content:"Anyone make it to the bottom of the mines yet?",
        creator:5,
        reference:0,
        honors:0,
        game:2,
        private:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        id:12,
        content:"Hi! I'm ATotalGamer!",
        creator:7,
        reference:0,
        honors:0,
        game:1,
        private:1,
        createdAt:new Date(),
        updatedAt:new Date()
      }])
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
