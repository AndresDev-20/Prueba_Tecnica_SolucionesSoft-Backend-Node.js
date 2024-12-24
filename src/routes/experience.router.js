const { getAll, create, getOne, remove, update } = require('../controllers/experience.controllers');
const express = require('express');

const routerExperience = express.Router();

routerExperience.route('/')
    .get(getAll)
    .post(create);

routerExperience.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerExperience;