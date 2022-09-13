module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('releases',
      [{
        id: 1,
        name: 'Jorge Lafond',
        totalValue: 600,
        installments: 1,
        releaseDate: '2022-01-20',
        status: 'Paid',
      },
      {
        id: 2,
        name: 'Marcio Meirelles',
        totalValue: 1000,
        installments: 2,
        releaseDate: '2022-06-25',
        status: 'Not paid',
      },
      {
        id: 3,
        name: 'Kleber Bambam',
        totalValue: 1500,
        installments: 3,
        releaseDate: '2022-08-15',
        status: 'Not paid',
      },
      {
        id: 4,
        name: 'Mané Garrincha',
        totalValue: 300,
        installments: 1,
        releaseDate: '2022-08-15',
        status: 'Not paid',
      },
      {
        id: 5,
        name: 'Fuleco',
        totalValue: 200,
        installments: 1,
        releaseDate: '2022-08-17',
        status: 'Not paid',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('releases', null, {});
  },
};