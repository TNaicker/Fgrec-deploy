'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('crafts', (table) => {
    table.increments();
    table.string('craft_name', 50).notNullable();
    table.integer('id_number');
    table.integer('cost').notNullable();
    table.string('rarity').notNullable();
    table.string('atk_lvl_1').notNullable();
    table.string('hp_lvl_1').notNullable();
    table.string('atk_lvl_max').notNullable();
    table.string('hp_lvl_max').notNullable();
    table.string('description').notNullable();
    table.string('description_mlb').notNullable();
    table.string('max_lvl');
    table.string('img_icon');
    table.string('img_full');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('crafts');
};
