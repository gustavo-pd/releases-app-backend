module.exports = (sequelize, DataTypes) => {
  const releases = sequelize.define('releases', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    totalValue: DataTypes.DECIMAL(9, 2),
    installments: DataTypes.INTEGER,
    releaseDate: DataTypes.DATEONLY,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  releases.associate = (models) => {
    releases.hasMany(models.values,
      { foreignKey: 'releaseId', as: 'release' });
  };

  return releases;
};