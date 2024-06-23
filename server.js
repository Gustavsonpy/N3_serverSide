import express, { Router } from "express";
import { route } from "./routes/prestador_route.js";
import db from "./config/database.js";

const port = 3000;
const server = express()
server.use(express.json());

try {
    await db.authenticate()
    console.log("Conexão com o Mysql estabelecida")
} catch(e) {
    console.log("Conexão com o Mysql não estabelecida\n", e)
}

server.use("/", route);

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})