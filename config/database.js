import { Sequelize } from "sequelize";

const db = new Sequelize("testeN3", "root", "", {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    define: {
        timestamps: false
    }
});

export default db;