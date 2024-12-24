const sequelize = require("../utils/connection")
const { DataTypes } = require('sequelize');

const Work = sequelize.define("work", {
    jobType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    workOption: {
        type: DataTypes.STRING, 
        allowNull: true
    },
    cultureType: {
        type: DataTypes.STRING,
        allowNull: true
    },
})

module.exports = Work;