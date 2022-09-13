module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('values',
      [{
        id: 1,
        releaseId: 1,
        installmentValue: 600,
        installmentDate: '2022-01-20',
      },
      {
        id: 2,
        releaseId: 2,
        installmentValue: 500,
        installmentDate: '2022-06-25',
      },
      {
        id: 3,
        releaseId: 2,
        installmentValue: 500,
        installmentDate: '2022-07-25',
      },
      {
        id: 4,
        releaseId: 3,
        installmentValue: 500,
        installmentDate: '2022-08-15',
      },
      {
        id: 5,
        releaseId: 3,
        installmentValue: 500,
        installmentDate: '2022-09-15',
      },
      {
        id: 6,
        releaseId: 3,
        installmentValue: 500,
        installmentDate: '2022-10-15',
      },
      {
        id: 7,
        releaseId: 4,
        installmentValue: 300,
        installmentDate: '2022-08-15',
      },
      {
        id: 8,
        releaseId: 5,
        installmentValue: 200,
        installmentDate: '2022-08-17',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('values', null, {});
  },
};