
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_servants').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_servants').insert([
        {user_id: 10, servant_id: 21, ascension: 4, skill_1_lvl: 1, skill_2_lvl: 1, skill_3_lvl: 1},
        {user_id: 10, servant_id: 25, ascension: 3, skill_1_lvl: 1, skill_2_lvl: 1, skill_3_lvl: 1},
      ]);
    });
};
