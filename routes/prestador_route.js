import express from "express";
import { 
    createPrestador,
    getPrestador,
    getPrestadorByName,
    getPrestadorByTempoExperiencia,
    getPrestadorByCategoria,
    getPrestadorByServico, 
    updateNamePrestador,
    updateTempoExperiencia,
    updateCategoria,
    updateServico,
    deletePrestador } from "../controllers/prestador_controller.js";


let prestador_route = express.Router();

prestador_route.post('/newPrestador', createPrestador);
prestador_route.get('/prestadores', getPrestador);
prestador_route.get('/nome/:nome_prestador', getPrestadorByName);
prestador_route.get('/tempo_experiencia/:tempo_experiencia', getPrestadorByTempoExperiencia);
prestador_route.get('/categoria/:fk_categoria', getPrestadorByCategoria);
prestador_route.get('/servico/:fk_servico', getPrestadorByServico);
prestador_route.put('/updateName/:id_prestador', updateNamePrestador);
prestador_route.put('/updateTempoExperiencia/:id_prestador', updateTempoExperiencia);
prestador_route.put('/updateCategoria/:id_prestador', updateCategoria);
prestador_route.put('/updateServico/:id_prestador', updateServico);
prestador_route.delete('/delete/:id_prestador', deletePrestador);


export {prestador_route};