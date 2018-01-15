"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push({
        name: `FooCardksdkjfsdf`,
        listId: i + 1,
        body: "Some card body"
      });
      cards.push({
        name: `FooCardlksdjflksdjf`,
        listId: i + 1,
        body: "Some card body"
      });
      cards.push({
        name: `FooCardksdjflksjdf`,
        listId: i + 1,
        body: "Some card body"
      });
      cards.push({
        name: `FooCardklsdjflksdjf`,
        listId: i + 1,
        body: "Some card body"
      });
    }
    return queryInterface.bulkInsert("Cards", cards);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
