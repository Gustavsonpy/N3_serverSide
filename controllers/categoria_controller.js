import Categoria from "../models/categoria_model.js";
import db from "../config/database.js";

async function syncDatabase() {
    await db.sync();
}

syncDatabase();

//-------------------------------------------------------------------------------
//CREATE   
export let createCategoria = async(req, res) => {
    try{
        const categoria = await Categoria.create({
            nome_categoria: req.body.nome_categoria,
        })
        res.status(200).send(categoria);
    }catch(e){
        res.status(500).send("Algo deu errado com a criação da categoria!\n\n")
    }
}

//-------------------------------------------------------------------------------
//READ
export let getCategorias = async(req, res) => {
    try{
        const categorias = await Categoria.findAll();
        res.status(200).send(categorias);
    }catch(e){
        res.status(500).send("Erro ao resgatar as categorias!");
        console.log("Erro:\n\n", e);
    }
}

export let getCategoriaByName = async(req, res) => {
    try{
        const categoria = await Categoria.findAll({
            where: {
                nome_categoria: req.params.nome_categoria
            }
        });
        if(categoria.length < 1) return res.status(500).send("Não existe este tipo de categoria")
        res.status(500).send(categoria);
    }catch(e){
        console.log("Erro ao resgatar a categoria!");
    }
}

//-------------------------------------------------------------------------------
//UPDATE
export let updateNameCategoria = async(req, res) =>{
    try{
        let categoria = await Categoria.findByPk(req.params.id_categoria);
        if(categoria){
            categoria.nome_categoria = req.body.nome_categoria;
            await categoria.save();
            res.status(200).send("Nome atualizado com sucesso!");
        }
        else{
            res.status(500).send("Erro ao encontar o id da categoria");
        }
    }catch(e){
        res.status(500).send("Não foi possível atualizar o nome da categoria\n");
        console.log("Erro:\n\n", e);
    }
}

//-------------------------------------------------------------------------------
//DELETE
export let deleteCategoria = async(req, res) => {
    try{
        let categoria = await Categoria.findByPk(req.params.id_categoria);
        if(categoria){
            categoria.destroy();
            res.status(200).send("Categoria deletada com sucesso!");
        }
    }catch(e){
        res.status(500).send("Erro ao deletar categoria!");
    }
}