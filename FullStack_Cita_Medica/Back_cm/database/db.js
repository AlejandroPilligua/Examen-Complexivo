import {Sequelize} from 'sequelize'

const db = new Sequelize('cita_medica', 'root', 'admin',{
    host:'localhost',
    dialect: 'mysql'
})

export default db