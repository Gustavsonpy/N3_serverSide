import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Usuario = db.define("usuario", {
    id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    senha_usuario: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email_usuario: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamp: false
})

export default Usuario;