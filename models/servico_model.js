import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Servico = db.define("servico", {
    id_servico: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_servico: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    valor_servico: {
        type: Sequelize.DECIMAL(19, 4),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamp: false
})

export default Servico;