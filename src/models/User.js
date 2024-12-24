const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection')

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    documentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salaryRange: {
        type: DataTypes.STRING,
        allowNull: true
    },
    professionalLevel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    specialization: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profetion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    citySearhJoi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    travelAvailability: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linkedin: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
    personalValue: {
        type: DataTypes.TEXT, // Texto más largo
        allowNull: true
    },
    jobHappiness: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    professionalTalent: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    futureIdeas: {
        type: DataTypes.TEXT,
        allowNull: true
    }

    // backgroundImage
    // profileImage
}) 

module.exports = User;