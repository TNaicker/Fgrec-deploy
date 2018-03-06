'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('user_crafts', (table) => {
    table.increments();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table.integer('crafts_id')
      .references('id')
      .inTable('crafts')
      .notNullable()
      .onDelete('CASCADE');
    table.boolean('MLB').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_crafts');
};
