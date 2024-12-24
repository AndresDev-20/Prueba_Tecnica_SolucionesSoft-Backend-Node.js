const sequelize = require("../utils/connection")
const { DataTypes } = require('sequelize');

const Achievements = sequelize.define("achievements", {
    text: {
        type: DataTypes.STRING, 
        allowNull: true
    }
})

module.exports = Achievements;