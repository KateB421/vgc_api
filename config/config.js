require('dotenv').config();
module.exports={
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PW,
        "database": process.env.DB_DBNAME,
        "host": process.env.DB_HOST,
        "dialect": "postgres"
      },
      "test": {
        "username": "postgres",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "postgres"
      },
      "production": {
        "username": "postgres",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "postgres"
      }
}