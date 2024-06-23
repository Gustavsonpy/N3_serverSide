import express from "express";
import { createCategoria, getCategorias, getCategoriaByName, updateNameCategoria, deleteCategoria } from "../controllers/categoria_controller.js"

const categoria_route = express.Router();

categoria_route.post('/newCategoria', createCategoria);
categoria_route.get('/categorias', getCategorias);
categoria_route.get('/nome/:nome_categoria', getCategoriaByName);
categoria_route.put('/updateName/:id_categoria', updateNameCategoria);
categoria_route.delete('/delete/:id_categoria', deleteCategoria);

export { categoria_route }