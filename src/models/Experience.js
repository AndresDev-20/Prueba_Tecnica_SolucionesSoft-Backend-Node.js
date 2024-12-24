const sequelize = require('../utils/connection')
const { DataTypes } = require('sequelize');

const Experience = sequelize.define('experience', {
    position: {
        type: DataTypes.STRING, // Cargo del empleado
        allowNull: false
    },
    company: {
        type: DataTypes.STRING, // Nombre de la empresa
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY, // Fecha de inicio en formato YYYY-MM-DD
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY, // Fecha de fin en formato YYYY-MM-DD
        allowNull: true // Puede ser null si sigue trabajando ahí
    },
    currentlyWorking: {
        type: DataTypes.BOOLEAN, // Indica si trabaja aquí actualmente
        allowNull: false,
        defaultValue: false
    }
}) 

module.exports = Experience;