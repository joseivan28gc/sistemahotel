const db = require('../config/db.config.js');
const Autor = db.Autor;

exports.create = (req, res) => {
    let autor = {};

    try {
        autor.nombre = req.body.nombre;
        autor.apellido = req.body.apellido;
        autor.nacionalidad = req.body.nacionalidad;
        autor.fecha_nacimiento = req.body.fecha_nacimiento;

        Autor.create(autor).then(result => {
            res.status(200).json({
                message: "Autor creado exitosamente con id = " + result.id_autor,
                autor: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Fallo al crear el autor!",
            error: error.message
        });
    }
};

exports.retrieveAllAutores = (req, res) => {
    Autor.findAll()
        .then(autorInfos => {
            res.status(200).json({
                message: "¡Autores obtenidos exitosamente!",
                autores: autorInfos
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener los autores!",
                error: error
            });
        });
};

exports.getAutorById = (req, res) => {
    let autorId = req.params.id;
    Autor.findByPk(autorId)
        .then(autor => {
            if (autor) {
                res.status(200).json({
                    message: "Autor obtenido exitosamente con id = " + autorId,
                    autor: autor
                });
            } else {
                res.status(404).json({
                    message: "No se encontró el autor con id = " + autorId,
                    error: "404"
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener autor con id!",
                error: error
            });
        });
};

exports.updateById = async (req, res) => {
    try {
        let autorId = req.params.id;
        let autor = await Autor.findByPk(autorId);
    
        if (!autor) {
            res.status(404).json({
                message: "No se encontró el autor para actualizar con id = " + autorId,
                autor: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                nacionalidad: req.body.nacionalidad,
                fecha_nacimiento: req.body.fecha_nacimiento
            };

            let [updated] = await Autor.update(updatedObject, { 
                returning: true, 
                where: { id_autor: autorId } 
            });

            if (updated) {
                const updatedAutor = await Autor.findByPk(autorId);
                res.status(200).json({
                    message: "Actualización exitosa de un autor con id = " + autorId,
                    autor: updatedAutor,
                });
            } else {
                res.status(500).json({
                    message: "No se pudo actualizar el autor con id = " + autorId,
                    error: "No se pudo actualizar el autor",
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede actualizar el autor con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        let autorId = req.params.id;
        let autor = await Autor.findByPk(autorId);

        if (!autor) {
            res.status(404).json({
                message: "No existe el autor con id = " + autorId,
                error: "404",
            });
        } else {
            await autor.destroy();
            res.status(200).json({
                message: "Eliminación exitosa del autor con id = " + autorId,
                autor: autor,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede eliminar el autor con id = " + req.params.id,
            error: error.message,
        });
    }
};
