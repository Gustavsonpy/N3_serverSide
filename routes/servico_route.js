import express from "express";
import { createServico, getServicos, getServicoByName, updateNameServico, updatePrecoServico, getServicoByValor, deleteServico, getPriceServicoByHour } from "../controllers/servico_controller.js"

const servico_route = express.Router();

servico_route.post('/newServico', createServico);
servico_route.get('/servicos', getServicos);
servico_route.get('/nome/:nome_servico', getServicoByName);
servico_route.get('/preco/:valor_servico', getServicoByValor);
servico_route.put('/updateName/:id_servico', updateNameServico);
servico_route.put('/updatePreco/:id_servico', updatePrecoServico);
servico_route.delete('/delete/:id_servico', deleteServico);

servico_route.post('/servicePrice', getPriceServicoByHour);

export { servico_route }