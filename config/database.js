import { Sequelize } from "sequelize";

const db = new Sequelize("prestador_servico", "root", "", {
    dialect: "mysql",
    host: "localhost",
    port: 3306
});

export default db;