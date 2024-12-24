const { getAll, create, getOne, remove, update } = require('../controllers/achievements.controllers');
const express = require('express');

const routerAchievements = express.Router();

routerAchievements.route('/')
    .get(getAll)
    .post(create);

routerAchievements.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerAchievements;