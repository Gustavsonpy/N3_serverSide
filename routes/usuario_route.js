import express from "express";
import { createUser, getUser, updateNameUser, deleteUser } from "../controllers/usuario.controller.js";

const usuario_route = express.Router();

usuario_route.get('/usuarios', getUser)
usuario_route.post('/addUser', createUser)
usuario_route.put('/updateNameUser/:id_usuario', updateNameUser)
usuario_route.delete('/deleteUser/:id_usuario', deleteUser)

export { usuario_route };