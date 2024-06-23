import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Categoria from "./categoria_model.js";
import Servico from "./servico_model.js";

const Prestador = db.define("prestador", {
    id_prestador: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_prestador: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    tempo_experiencia: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fk_categoria: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    fk_servico: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false
    },
},{
    freezeTableName : true,
    timestamps: false 
})

Prestador.belongsTo(Categoria, { foreignKey: 'fk_categoria' });
Prestador.belongsTo(Servico, { foreignKey: 'fk_servico' });

export default Prestador;