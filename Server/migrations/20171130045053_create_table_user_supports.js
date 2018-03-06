'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('user_supports', (table) => {
    table.increments();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table.string('all')
    table.string('saber')
    table.string('archer')
    table.string('lancer')
    table.string('all')
    table.string('all')
    table.string('all')
    table.string('all')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_supports');
};
