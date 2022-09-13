'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('releases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      totalValue: {
        type: Sequelize.DECIMAL(9,2)
      },
      installments: {
        type: Sequelize.INTEGER
      },
      releaseDate: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('releases');
  }
};