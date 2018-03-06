
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('servants').del()
    .then(function () {
      // Inserts seed entries
      return knex('servants').insert([
        // 1 stars
        {servant_name: "Arash", class: 'Archer', cost: 3, rarity: '★', atk_lvl_100: 9037, hp_lvl_100: 10979},
        {servant_name: "Wolfgang Amadeus Mozart", class: 'Caster', cost: 3, rarity: '★', atk_lvl_100: 8072, hp_lvl_100: 10990},
        {servant_name: "Sasaki Kojiro", class: 'Assassin', cost: 3, rarity: '★', atk_lvl_100: 8912, hp_lvl_100: 9588},
        {servant_name: "Mata Hari", class: 'Assassin', cost: 3, rarity: '★', atk_lvl_100: 8355, hp_lvl_100: 10120},
        {servant_name: "Spartacus", class: 'Berserker', cost: 3, rarity: '★', atk_lvl_100: 7883, hp_lvl_100: 11904},
        {servant_name: "Asterios", class: 'Berserker', cost: 3, rarity: '★', atk_lvl_100: 9381, hp_lvl_100: 10181},

        // 2 stars
        {servant_name: "Musashibou Benkei", class: 'Lancer', cost: 4, rarity: '★★', atk_lvl_100: 8406, hp_lvl_100: 13204},
        {servant_name: "Leonidas I", class: 'Lancer', cost: 4, rarity: '★★', atk_lvl_100: 9539, hp_lvl_100: 11486},
        {servant_name: "Georgios", class: 'Rider', cost: 4, rarity: '★★', atk_lvl_100: 7587, hp_lvl_100: 13278},
        {servant_name: "Edward Teach", class: 'Rider', cost: 4, rarity: '★★', atk_lvl_100: 8967, hp_lvl_100: 11411},
        {servant_name: "Hans Christian Anderson", class: 'Caster', cost: 4, rarity: '★★', atk_lvl_100: 8344, hp_lvl_100: 12244},
        {servant_name: "William Shakespeare", class: 'Caster', cost: 4, rarity: '★★', atk_lvl_100: 8402, hp_lvl_100: 11661},
        {servant_name: "Hassan Of The Cursed Arm", class: 'Assassin', cost: 4, rarity: '★★', atk_lvl_100: 9100, hp_lvl_100: 10960},
        {servant_name: "Charles-Henri Sanson", class: 'Assassin', cost: 4, rarity: '★★', atk_lvl_100: 7906, hp_lvl_100: 11991},
        {servant_name: "Phantom Of The Opera", class: 'Assassin', cost: 4, rarity: '★★', atk_lvl_100: 8193, hp_lvl_100: 12112},
        {servant_name: "Caligula", class: 'Berserker', cost: 4, rarity: '★★', atk_lvl_100: 9899, hp_lvl_100: 10540},
        {servant_name: "Eric Bloodaxe", class: 'Berserker', cost: 4, rarity: '★★', atk_lvl_100: 9115, hp_lvl_100: 11095},

        // 3 stars
        {servant_name: "Mash Kyrelight", class: 'Shielder', cost: 0, rarity: '★★★', atk_lvl_100: 10575, hp_lvl_100: 15619},
        {servant_name: "Gaius Julius Caesar", class: 'Saber', cost: 7, rarity: '★★★', atk_lvl_100: 10146, hp_lvl_100: 13009},
        {servant_name: "Gilles De Rais", class: 'Saber', cost: 7, rarity: '★★★', atk_lvl_100: 8952, hp_lvl_100: 14234},
        {servant_name: "Robin Hood", class: 'Archer', cost: 7, rarity: '★★★', atk_lvl_100: 9088, hp_lvl_100: 13812},
        {servant_name: "Euryale", class: 'Archer', cost: 7, rarity: '★★★', atk_lvl_100: 9517, hp_lvl_100: 12889},
        {servant_name: "Cu Chulainn", class: 'Lancer', cost: 7, rarity: '★★★', atk_lvl_100: 9797, hp_lvl_100: 13007},
        {servant_name: "Cu Chulainn [Prototype]", class: 'Lancer', cost: 7, rarity: '★★★', atk_lvl_100: 9585, hp_lvl_100: 13691},
        {servant_name: "Romulus", class: 'Lancer', cost: 7, rarity: '★★★', atk_lvl_100: 9797, hp_lvl_100: 13400},
        {servant_name: "Medusa", class: 'Rider', cost: 7, rarity: '★★★', atk_lvl_100: 9744, hp_lvl_100: 12117},
        {servant_name: "Boudica", class: 'Rider', cost: 7, rarity: '★★★', atk_lvl_100: 8511, hp_lvl_100: 13735},
        {servant_name: "Ushiwakamaru", class: 'Rider', cost: 7, rarity: '★★★', atk_lvl_100: 9576, hp_lvl_100: 12240},
        {servant_name: "Alexander", class: 'Rider', cost: 7, rarity: '★★★', atk_lvl_100: 9955, hp_lvl_100: 11714},
        {servant_name: "Medea", class: 'Caster', cost: 7, rarity: '★★★', atk_lvl_100: 10039, hp_lvl_100: 11719},
        {servant_name: "Gilles De Rais", class: 'Caster', cost: 7, rarity: '★★★', atk_lvl_100: 8816, hp_lvl_100: 12889},
        {servant_name: "Mephistopheles", class: 'Caster', cost: 7, rarity: '★★★', atk_lvl_100: 9255, hp_lvl_100: 12495},
        {servant_name: "Cu Chulainn", class: 'Caster', cost: 7, rarity: '★★★', atk_lvl_100: 8905, hp_lvl_100: 13022},
        {servant_name: "Jing Ke", class: 'Assassin', cost: 7, rarity: '★★★', atk_lvl_100: 9754, hp_lvl_100: 11244},
        {servant_name: "Lu Bu Fengxian", class: 'Berserker', cost: 7, rarity: '★★★', atk_lvl_100: 10988, hp_lvl_100: 11256},
        {servant_name: "Darius III", class: 'Berserker', cost: 7, rarity: '★★★', atk_lvl_100: 10297, hp_lvl_100: 11881},
        {servant_name: "Kiyohime", class: 'Berserker', cost: 7, rarity: '★★★', atk_lvl_100: 8992, hp_lvl_100: 12428},
        {servant_name: "David", class: 'Archer', cost: 7, rarity: '★★★', atk_lvl_100: 10470, hp_lvl_100: 11719},
        {servant_name: "Hektor", class: 'Lancer', cost: 7, rarity: '★★★', atk_lvl_100: 9376, hp_lvl_100: 13829},

        // 4 stars
        {servant_name: "Artoria Pendragon [Alter]", class: 'Saber', cost: 12, rarity: '★★★★', atk_lvl_100: 12408, hp_lvl_100: 14051},
        {servant_name: "Artoria Pendragon [Lily]", class: 'Saber', cost: 12, rarity: '★★★★', atk_lvl_100: 9355, hp_lvl_100: 12880},
        {servant_name: "Nero Claudius", class: 'Saber', cost: 12, rarity: '★★★★', atk_lvl_100: 11441, hp_lvl_100: 14250},
        {servant_name: "Siegfried", class: 'Saber', cost: 12, rarity: '★★★★', atk_lvl_100: 9905, hp_lvl_100: 17175},
        {servant_name: "Chevalier d\'Eon", class: 'Saber', cost: 12, rarity: '★★★★', atk_lvl_100: 10613, hp_lvl_100: 16073},
        {servant_name: "Emiya", class: 'Archer', cost: 12, rarity: '★★★★', atk_lvl_100: 11379, hp_lvl_100: 13969},
        {servant_name: "Atalante", class: 'Archer', cost: 12, rarity: '★★★★', atk_lvl_100: 10453, hp_lvl_100: 15127},
        {servant_name: "Elisabeth Bathory", class: 'Lancer', cost: 12, rarity: '★★★★', atk_lvl_100: 11045, hp_lvl_100: 14392},
        {servant_name: "Marie Antionette", class: 'Rider', cost: 12, rarity: '★★★★', atk_lvl_100: 10041, hp_lvl_100: 14972},
        {servant_name: "Martha", class: 'Rider', cost: 12, rarity: '★★★★', atk_lvl_100: 9703, hp_lvl_100: 15845},
        {servant_name: "Stheno", class: 'Assassin', cost: 12, rarity: '★★★★', atk_lvl_100: 10879, hp_lvl_100: 13965},
        {servant_name: "Carmilla", class: 'Assassin', cost: 12, rarity: '★★★★', atk_lvl_100: 11391, hp_lvl_100: 12698},
        {servant_name: "Heracles", class: 'Berserker', cost: 12, rarity: '★★★★', atk_lvl_100: 12901, hp_lvl_100: 12521},
        {servant_name: "Lancelot", class: 'Berserker', cost: 12, rarity: '★★★★', atk_lvl_100: 12685, hp_lvl_100: 12521},
        {servant_name: "Tamamo Cat", class: 'Berserker', cost: 12, rarity: '★★★★', atk_lvl_100: 10929, hp_lvl_100: 13893},
        {servant_name: "Elisabeth Bathory [Halloween]", class: 'Caster', cost: 12, rarity: '★★★★', atk_lvl_100: 10432, hp_lvl_100: 13827},
        {servant_name: "Anne Bonny & Mary Read", class: 'Rider', cost: 12, rarity: '★★★★', atk_lvl_100: 10932, hp_lvl_100: 13684},
        {servant_name: "Medea [Lily]", class: 'Caster', cost: 12, rarity: '★★★★', atk_lvl_100: 9403, hp_lvl_100: 15847},

        // 5 stars
        {servant_name: "Artoria Pendragon", class: 'Saber', cost: 16, rarity: '★★★★★', atk_lvl_100: 12283, hp_lvl_100: 16597},
        {servant_name: "Altera", class: 'Saber', cost: 16, rarity: '★★★★★', atk_lvl_100: 13511, hp_lvl_100: 15236},
        {servant_name: "Gilgamesh", class: 'Archer', cost: 16, rarity: '★★★★★', atk_lvl_100: 13442, hp_lvl_100: 14348},
        {servant_name: "Zhuge Liang [El-Melloi III]", class: 'Caster', cost: 16, rarity: '★★★★★', atk_lvl_100: 11601, hp_lvl_100: 15621},
        {servant_name: "Sakata Kintoki", class: 'Berserker', cost: 16, rarity: '★★★★★', atk_lvl_100: 13915, hp_lvl_100: 13311},
        {servant_name: "Vlad III", class: 'Berserker', cost: 16, rarity: '★★★★★', atk_lvl_100: 12587, hp_lvl_100: 15086},
        {servant_name: "Jeanne d\'Arc", class: 'Ruler', cost: 16, rarity: '★★★★★', atk_lvl_100: 10501, hp_lvl_100: 18076},
        {servant_name: "Orion", class: 'Archer', cost: 16, rarity: '★★★★★', atk_lvl_100: 12158, hp_lvl_100: 15943},
        {servant_name: "Tamamo-no-Mae", class: 'Caster', cost: 16, rarity: '★★★★★', atk_lvl_100: 11544, hp_lvl_100: 15621},
        {servant_name: "Francis Drake", class: 'Rider', cost: 16, rarity: '★★★★★', atk_lvl_100: 12398, hp_lvl_100: 14056},
      ]);
    });
};
