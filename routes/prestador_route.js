import express from "express";
import { getPrestadores, createPrestador } from "../controllers/prestador_controller.js";


let route = express.Router();

route.get('/prestadores', getPrestadores);
route.post('/newPrestador', createPrestador);


export {route};