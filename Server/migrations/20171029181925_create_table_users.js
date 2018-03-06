'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name', 50).unique().notNullable();
    table.specificType('hashed_password', 'char(60)').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
