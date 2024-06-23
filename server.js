import express from "express";

const port = 3000;
const server = express()
server.use(express.json());

try {
    await db.authenticate()
    console.log("Conexão com o Mysql estabelecida")
} catch(e) {
    console.log("Conexão com o Mysql não estabelecida")
}

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})