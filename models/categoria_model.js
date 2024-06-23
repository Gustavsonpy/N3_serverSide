import { Sequelize } from "sequelize";
import db from "../config/database.js"

const Categoria = db.define("categoria", {
    id_categoria: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_categoria: {
        type: Sequelize.STRING(45),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamp: false,
    allowNull: false
})

export default Categoria;