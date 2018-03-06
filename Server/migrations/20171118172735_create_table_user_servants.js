'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('user_servants', (table) => {
    table.increments();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table.integer('servant_id')
      .references('id')
      .inTable('servants')
      .notNullable()
      .onDelete('CASCADE');
    table.integer('ascension').notNullable();
    table.integer('skill_1_lvl').notNullable();
    table.integer('skill_2_lvl').notNullable();
    table.integer('skill_3_lvl').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_servants');
};
