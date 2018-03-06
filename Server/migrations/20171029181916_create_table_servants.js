'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('servants', (table) => {
    table.increments();
    table.string('servant_name', 50).notNullable();
    table.string('class', 20).notNullable();
    table.integer('id_number');
    table.integer('cost').notNullable();
    table.string('rarity').notNullable();
    table.string('atk_lvl_100').notNullable();
    table.string('hp_lvl_100').notNullable();
    table.string('img_icon');
    table.string('img_full');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('servants');
};
