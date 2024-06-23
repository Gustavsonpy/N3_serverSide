import express, { Router } from "express";
import { prestador_route } from "./routes/prestador_route.js";
import { servico_route } from "./routes/servico_route.js";
import { categoria_route } from "./routes/categoria_route.js";
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

server.use("/prestador", prestador_route);
server.use("/servico", servico_route);
server.use("/categoria", categoria_route);

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})