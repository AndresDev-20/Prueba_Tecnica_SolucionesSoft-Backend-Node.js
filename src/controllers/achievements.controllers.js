const catchError = require('../utils/catchError');
const Achievements = require('../models/Achievements');
const Image = require('../models/Image');

const getAll = catchError(async(req, res) => {
    const results = await Achievements.findAll({include: Image});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Achievements.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Achievements.findByPk(id, {include: Image});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Achievements.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Achievements.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}