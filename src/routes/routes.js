const express = require('express');

const releasesController = require('../controllers/releasesController');
const valuesController = require('../controllers/valuesController');
const {
  validName,
  validValue,
  validInstallment,
  validDate,
} = require('../middlewares/releasesMiddleware');

const routes = express.Router();

routes.get('/releases', releasesController.getAll);

routes.get('/releases/:id', releasesController.getById);

routes.delete('/releases/:id', releasesController.deleteOne);

routes.post(
  '/releases',
  validName,
  validValue,
  validInstallment,
  validDate,
  releasesController.createOne,
);

routes.put('/releases/status/:id', releasesController.changeStatus);

routes.get('/values', valuesController.getAll);

routes.get('/values/:id', valuesController.getById);

module.exports = routes;
