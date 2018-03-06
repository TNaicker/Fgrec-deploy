'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments();
    table.string('name', 50).unique().notNullable();
    table.string('type').notNullable();
    table.string('description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('items');
};
