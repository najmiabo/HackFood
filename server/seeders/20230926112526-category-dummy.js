'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categories = [
      {
        name: 'Cemilan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Makanan Lokal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Makanan Asing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Minuman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('Categories', categories)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
