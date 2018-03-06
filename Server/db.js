const APP_MODE = 'development';
const dbConfig = require('./knexfile')[APP_MODE];
const knex = require('knex')(dbConfig);

module.exports = knex;
