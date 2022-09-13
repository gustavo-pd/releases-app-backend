const { values } = require('../database/models');

async function getAll() {
  const result = await values.findAll({ order: ['installmentDate'] });
  return result;
}

async function getById(id) {
  const result = await values.findByPk(id);
  return result;
}

module.exports = {
  getAll,
  getById,
};