import express from "express";
import { createUser, getUser, updateNameUser, deleteUser, login } from "../controllers/usuario.controller.js";
import { verifyJWT } from "../server.js";

const usuario_route = express.Router();

usuario_route.get('/usuarios', getUser)
usuario_route.post('/addUser', createUser)
usuario_route.put('/updateNameUser/:id_usuario', updateNameUser)
usuario_route.delete('/deleteUser/:id_usuario', deleteUser)

usuario_route.post('/login', login);
usuario_route.get('/loginVerificado', verifyJWT, (req, res) => {
    res.status(200).json({
        mensagem: "Token Válido"
    });
});
export { usuario_route };