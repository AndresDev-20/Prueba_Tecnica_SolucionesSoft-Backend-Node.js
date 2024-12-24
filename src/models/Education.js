const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Education = sequelize.define('education', {
    degree: {
        type: DataTypes.STRING, // Título obtenido
        allowNull: false
    },
    institution: {
        type: DataTypes.STRING, // Nombre de la institución
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY, // Fecha de inicio en formato YYYY-MM-DD
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY, // Fecha de finalización en formato YYYY-MM-DD
        allowNull: true // Puede ser null si sigue en curso
    }
});

module.exports = Education;
