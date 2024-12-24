const { getAll, create, getOne, remove, update } = require('../controllers/work.controllers');
const express = require('express');

const routerWork = express.Router();

routerWork.route('/')
    .get(getAll)
    .post(create);

routerWork.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerWork;