import express from "express";
import { getPrestadores, createPrestador } from "../controllers/prestador_controller.js";


let prestador_route = express.Router();

prestador_route.get('/prestadores', getPrestadores);
prestador_route.post('/newPrestador', createPrestador);


export {prestador_route};