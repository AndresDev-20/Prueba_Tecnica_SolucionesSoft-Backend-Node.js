const express = require('express');
const routerUser = require('./user.router');
const routerImage = require('./image.router');
const routerEducation = require('./education.router');
const routerExperience = require('./experience.router');
const routerWork = require('./work.router');
const routerAchievements = require('./achievements.router');
const router = express.Router();
require("../models/index")

// colocar las rutas aquí
router.use("/user", routerUser)
router.use("/image", routerImage)
router.use("/education", routerEducation)
router.use("/experience", routerExperience)
router.use("/work", routerWork)
router.use("/achievements", routerAchievements)

module.exports = router;