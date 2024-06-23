import Prestador from "../models/prestador_model.js";
import db from "../config/database.js";

async function syncDatabase() {
    await db.sync();
}

syncDatabase();

//-------------------------------------------------------------------------------
//CREATE   
export let createPrestador = async(req, res) => {
    try{
        const prestador = await Prestador.create({
            nome_prestador: req.body.nome_prestador,
            tempo_experiencia: req.body.tempo_experiencia,
            fk_categoria: req.body.fk_categoria,
            fk_servico: req.body.fk_servico,
        })
        res.status(200).send(prestador);
    }catch(e){
        res.status(500).send("Algo deu errado com a criação do prestador!\n\n")
    }
}

//-------------------------------------------------------------------------------
//READ
export let getPrestador = async(req, res) => {
    try{
        const prestadores = await Prestador.findAll();
        res.status(200).send(prestadores);
    }catch(e){
        res.status(500).send("Erro ao resgatar os prestadores!");
        console.log("Erro:\n\n", e);
    }
}

export let getPrestadorByName = async(req, res) => {
    try{
        const prestador = await Prestador.findAll({
            where: {
                nome_prestador: req.params.nome_prestador
            }
        });
        if(prestador.length < 1) return res.status(500).send("Não existe este prestador")
        res.status(200).send(prestador);
    }catch(e){
        console.log("Erro ao resgatar os prestadores!");
    }
}

export let getPrestadorByTempoExperiencia = async(req, res) => {
    try{
        const prestador = await Prestador.findAll({
            where: {
                tempo_experiencia: req.params.tempo_experiencia
            }
        });
        if(prestador.length < 1) return res.status(500).send("Não existe prestador com essa experiência")
        res.status(200).send(prestador);
    }catch(e){
        console.log("Erro ao resgatar os prestadores!");
    }
}

export let getPrestadorByCategoria = async(req, res) => {
    try{
        const prestador = await Prestador.findAll({
            where: {
                fk_categoria: req.params.fk_categoria
            }
        });
        if(prestador.length < 1) return res.status(500).send("Não existe prestador com essa categoria!")
        res.status(200).send(prestador);
    }catch(e){
        console.log("Erro ao resgatar os prestadores!");
    }
}

export let getPrestadorByServico = async(req, res) => {
    try{
        const prestador = await Prestador.findAll({
            where: {
                fk_servico: req.params.fk_servico
            }
        });
        if(prestador.length < 1) return res.status(500).send("Não existe prestador com esse serviço!")
        res.status(200).send(prestador);
    }catch(e){
        console.log("Erro ao resgatar os prestadores!");
    }
}

//-------------------------------------------------------------------------------
//UPDATE
export let updateNamePrestador = async(req, res) =>{
    try{
        let prestador = await Prestador.findByPk(req.params.id_prestador);
        if(prestador){
            prestador.nome_prestador = req.body.nome_prestador;
            await prestador.save();
            res.status(200).send("Nome atualizado com sucesso!");
        }
        else{
            res.status(500).send("Erro ao encontar o id do prestador");
        }
    }catch(e){
        res.status(500).send("Não foi possível atualizar o nome do prestador\n");
        console.log("Erro:\n\n", e);
    }
}

export let updateTempoExperiencia = async(req, res) =>{
    try{
        let prestador = await Prestador.findByPk(req.params.id_prestador);
        if(prestador){
            prestador.tempo_experiencia = req.body.tempo_experiencia;
            await prestador.save();
            res.status(200).send("Tempo de experiência atualizado com sucesso!");
        }
        else{
            res.status(500).send("Erro ao encontar o id do prestador");
        }
    }catch(e){
        res.status(500).send("Não foi possível atualizar o tempo de experiência do prestador\n");
        console.log("Erro:\n\n", e);
    }
}

export let updateCategoria = async(req, res) =>{
    try{
        let prestador = await Prestador.findByPk(req.params.id_prestador);
        if(prestador){
            prestador.fk_categoria = req.body.fk_categoria;
            await prestador.save();
            res.status(200).send("Categoria atualizado com sucesso!");
        }
        else{
            res.status(500).send("Erro ao encontar o id do prestador");
        }
    }catch(e){
        res.status(500).send("Não foi possível atualizar a categoria do prestador\n");
        console.log("Erro:\n\n", e);
    }
}

export let updateServico = async(req, res) =>{
    try{
        let prestador = await Prestador.findByPk(req.params.id_prestador);
        if(prestador){
            prestador.fk_servico = req.body.fk_servico;
            await prestador.save();
            res.status(200).send("Serviço atualizado com sucesso!");
        }
        else{
            res.status(500).send("Erro ao encontar o id do prestador");
        }
    }catch(e){
        res.status(500).send("Não foi possível atualizar o serviço do prestador\n");
        console.log("Erro:\n\n", e);
    }
}

//-------------------------------------------------------------------------------
//DELETE
export let deletePrestador = async(req, res) => {
    try{
        let prestador = await Prestador.findByPk(req.params.id_prestador);
        if(prestador){
            prestador.destroy();
            res.status(200).send("Prestador deletado com sucesso!");
        }
    }catch(e){
        res.status(500).send("Erro ao deletar serviço!");
    }
}