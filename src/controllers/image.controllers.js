const catchError = require('../utils/catchError');
const Image = require('../models/Image');
const { uploadToCloudinary, deleteFromCloudinary } = require('../utils/cloudinary.js');

const getAll = catchError(async(req, res) => {
    const results = await Image.findAll();
    return res.json(results);
});


const create = catchError(async(req, res) => {
    const { path, filename } = req.file;
    const { userId, type, achievementId } = req.body;
    const { url, public_id } = await uploadToCloudinary(path, filename);
    const body = { url, filename: public_id, userId, type, achievementId }
    const image = await Image.create(body);
    console.log(body)
    return res.status(201).json(image);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Image.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Image.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    const { userId, type, achievementId } = req.body;

    if (!req.file) {
        return res.status(400).json({ message: "Archivo no proporcionado" });
    }

    const { path, filename } = req.file;
    console.log("res ------>" + path)
    // Buscar la imagen existente
    const existingImage = await Image.findByPk(id);
    if (!existingImage) {
        return res.status(404).json({ message: "Imagen no encontrada" });
    }

    // Eliminar imagen anterior y subir nueva
    await deleteFromCloudinary(existingImage.filename);
    const { url, public_id } = await uploadToCloudinary(path, filename);

    const updatedBody = { url, filename: public_id, userId, type, achievementId };
    await existingImage.update(updatedBody);

    return res.status(200).json(existingImage);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}