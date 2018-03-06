'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('user_items', (table) => {
    table.increments();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table.integer('item_id')
      .references('id')
      .inTable('items')
      .notNullable()
      .onDelete('CASCADE');
    table.integer('amount').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_items');
};
