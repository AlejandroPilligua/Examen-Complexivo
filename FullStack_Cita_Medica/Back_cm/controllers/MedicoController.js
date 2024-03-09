//importamos el Modelo
import MedicoModel from "../models/MedicoModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllMedicos = async (req, res) => {
    try {
        const medicos = await MedicoModel.findAll()
        res.json(medicos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getmedico = async (req, res) => {
        try {
            const medico = await MedicoModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(medico[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createMedico = async (req, res) => {
    try {
       await MedicoModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateMedico = async (req, res) => {
    try {
        await MedicoModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteMedico = async (req, res) => {
    try {
        await MedicoModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
