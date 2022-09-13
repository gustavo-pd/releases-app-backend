module.exports = (sequelize, DataTypes) => {
  const values = sequelize.define('values', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    releaseId: DataTypes.STRING,
    installmentValue: DataTypes.DECIMAL(9, 2),
    installmentDate: DataTypes.DATEONLY,
  },
  {
    timestamps: false,
  });

  values.associate = (models) => {
    values.belongsTo(models.releases,
      { foreignKey: 'releaseId', as: 'release' });
  }

  return values;
};