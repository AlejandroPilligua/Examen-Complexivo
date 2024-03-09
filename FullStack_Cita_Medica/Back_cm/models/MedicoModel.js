//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const MedicoModel = db.define('medicos', {
     Especialida: { type: DataTypes.STRING },
     Medico: { type: DataTypes.STRING },
 })

 export default MedicoModel