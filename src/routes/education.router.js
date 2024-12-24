const { getAll, create, getOne, remove, update } = require('../controllers/education.controllers');
const express = require('express');

const routerEducation = express.Router();

routerEducation.route('/')
    .get(getAll)
    .post(create);

routerEducation.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerEducation;