const valuesService = require('../services/valuesService');

const getAll = async (_req, res) => {
  try {
    const result = await valuesService.getAll();

    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await valuesService.getById(id);

    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAll,
  getById,
};
