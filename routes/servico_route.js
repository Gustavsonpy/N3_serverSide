import express from "express";
import { createServico } from "../controllers/servico_controller.js"

const servico_route = express.Router();

servico_route.post('/newServico', createServico);

export { servico_route }