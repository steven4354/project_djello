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
    var lists = [];
    for (let i = 0; i < 10; i++) {
      lists.push({
        name: `FooListksdkjfsdf`,
        boardId: i + 1
      });
      lists.push({
        name: `FooListlksdjflksdjf`,
        boardId: i + 1
      });
      lists.push({
        name: `FooListksdjflksjdf`,
        boardId: i + 1
      });
      lists.push({
        name: `FooListklsdjflksdjf`,
        boardId: i + 1
      });
    }
    return queryInterface.bulkInsert("Lists", lists);
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
