'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('values', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      releaseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'releases',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING
      },
      installmentValue: {
        type: Sequelize.DECIMAL(9,2)
      },
      installmentDate: {
        type: Sequelize.DATEONLY
      },
    });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('values');
  }
};