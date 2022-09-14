const releasesService = require('../services/releasesService');

const getAll = async (_req, res) => {
  try {
    const result = await releasesService.getAll();

    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await releasesService.getById(id);

    res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

const createOne = async (req, res) => {
  try {
    const { name, totalValue, installments, releaseDate, paid } = req.body;
    const result = await releasesService.createOne(
      { name, totalValue, installments, releaseDate, paid },
    );

    res.status(201).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
};

const changeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await releasesService.changeStatus(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    await releasesService.deleteOne(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  createOne,
  changeStatus,
  deleteOne,
};
