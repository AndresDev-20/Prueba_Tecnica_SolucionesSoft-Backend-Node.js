const catchError = require('../utils/catchError');
const User = require('../models/User');
const Image = require('../models/Image');
const Work = require('../models/Work');
const Education = require('../models/Education');
const Experience = require('../models/Experience');
const Achievements = require('../models/Achievements');

const getAll = catchError(async(req, res) => {
    const results = await User.findAll({include: [
        {
            model: Image
        },
        {
            model: Work
        },
        {
            model: Education
        },
        {
            model: Experience
        },
        {
            model: Achievements,
            include: Image
        }
    ]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await User.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;

    // Destructuramos solo los campos que deseas actualizar
    const {
        citySearhJoi,
        documentNumber,
        email,
        futureIdeas,
        jobHappiness,
        linkedin,
        name,
        personalValue,
        phone,
        profession,
        professionalLevel,
        professionalTalent,
        salaryRange,
        specialization,
        travelAvailability
    } = req.body;

    // Preparamos un objeto solo con los campos permitidos
    const updateData = {};

    if (citySearhJoi) updateData.citySearhJoi = citySearhJoi;
    if (documentNumber) updateData.documentNumber = documentNumber;
    if (email) updateData.email = email;
    if (futureIdeas) updateData.futureIdeas = futureIdeas;
    if (jobHappiness) updateData.jobHappiness = jobHappiness;
    if (linkedin) updateData.linkedin = linkedin;
    if (name) updateData.name = name;
    if (personalValue) updateData.personalValue = personalValue;
    if (phone) updateData.phone = phone;
    if (profession) updateData.profession = profession;
    if (professionalLevel) updateData.professionalLevel = professionalLevel;
    if (professionalTalent) updateData.professionalTalent = professionalTalent;
    if (salaryRange) updateData.salaryRange = salaryRange;
    if (specialization) updateData.specialization = specialization;
    if (travelAvailability) updateData.travelAvailability = travelAvailability;

    // Ejecutamos la actualización
    const result = await User.update(updateData, { where: { id }, returning: true });

    if (result[0] === 0) return res.sendStatus(404); 

    return res.json(result[1][0]); 
});

const updatePassword = catchError(async (req, res) => {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
        return res.status(400).json({ message: "Debes ingresar la contraseña antigua y la nueva contraseña." });
    }
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado." });
    }
    if (user.password !== oldPassword) {
        return res.status(401).json({ message: "La contraseña antigua es incorrecta." });
    }
    await User.update(
        { password: newPassword },
        { where: { id } }
    );

    return res.status(200).json({ message: "Contraseña actualizada con éxito." });
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    updatePassword
}