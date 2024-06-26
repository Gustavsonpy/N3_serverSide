import express, { Router } from "express";
import { prestador_route } from "./routes/prestador_route.js";
import { servico_route } from "./routes/servico_route.js";
import { categoria_route } from "./routes/categoria_route.js";
import { usuario_route } from "./routes/usuario_route.js";
import db from "./config/database.js";
import { config } from "dotenv-safe";
config()
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import http from "http";

const port = 3000;
const server = express()
server.use(bodyParser.json())
server.use(express.json());

//JWT HOME
server.get('/', (req, res, next) => {
    res.json({ message: "Servidor funcionando!" })
})

// JWT USUARIO
server.get('/usuario', verifyJWT, (req, res, next) => {
    res.json([{id: 1, nome: 'guilherme'}])
})

// JWT LOGIN
server.post('/login', (req, res, next) => {
    if ((req.body.user === 'guilherme') && (req.body.pwd === '12345')) {
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn:60
        })

        return res.json({ auth: true, token: token })
    }

    res.status(500).json({ message: "Login errado"})
})

// JWT LOGOFF
server.post('/logoff', function(req, res) {
    res.json({ auth: false, token: null })
})

// VERIFICAR TOKEN
export function verifyJWT(req, res, next){
    const token = req.headers['x-access-token']
    
    if (!token) return res.status(401).json({
        auth: false, message: "Token não existe!"
    })
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: "Falha na autenticação!" })
        
        req.id = decoded.id;
        next()
    })
}

const app = http.createServer(server)

try {
    await db.authenticate()
    console.log("Conexão com o Mysql estabelecida")
} catch(e) {
    console.log("Conexão com o Mysql não estabelecida\n", e)
}

server.use("/prestador", prestador_route);
server.use("/servico", servico_route);
server.use("/categoria", categoria_route);
server.use("/usuario", usuario_route);

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})