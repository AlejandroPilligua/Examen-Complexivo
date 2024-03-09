//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const BlogModel = db.define('Medico', {
     Especialida: { type: DataTypes.STRING },
     Medico: { type: DataTypes.STRING },
 })

 export default BlogModel