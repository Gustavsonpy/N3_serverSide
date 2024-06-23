import { where } from "sequelize";
import prestador from "../models/prestador_model.js";

async function syncDatabase() {
    await prestador.sync();
}

syncDatabase();

export let createPrestador = async(req, res) => {
    try{
        const prestadorCreated = await prestador.create({
            nome_prestador: req.body.nome_prestador,
            tempo_experiencia: req.body.tempo_experiencia,
            fk_exeperiencia: req.body.fk_exeperiencia,
            fk_servico: req.body.fk_servico
        })
        req.status(200).send(prestadorCreated);
    }catch(e){
        res.status(500).send("Algo deu errado com a criação do prestador!")
    }
}

export let getPrestadores = async(req, res) => {
    try{
        const prestadores = await prestador.findAll();
        res.send(prestadores);
    }catch(e){
        console.log("Erro ao resgatar os prestadores!");
    }
}

// export let getPrestadoresBy = async(req, res) => {
//     try{
//         const prestadores = await prestador.findAll();
//         res.send(prestadores);
//     }catch(e){
//         console.log("Erro ao resgatar os prestadores!");
//     }
// }

export let updateNamePrestador = async(req, res) =>{
    try{
        if(prestador.findByPk(req.body.id_prestador)){
            prestador.nome_prestador = req.body.nome_prestador;
            await prestador.save();
        }
        else{
            res.send("Erro ao encontar o id do prestador");
        }
    }catch(e){
        res.status(500).send("Não foi possível atualizar o nome do prestador\n", e);
    }
}

export let updateExperienciaPrestador = async(req, res) =>{
    try{
        if(prestador.findByPk(req.body.id_prestador)){
            prestador.tempo_experiencia = req.body.tempo_experiencia;
            await prestador.save();
        }
        else{
            res.send("Erro ao encontar o id do prestador");
        }
    }catch(e){
        res.status(500).send("Não foi possível atualizar o tempo de experiencia do prestador\n", e);
    }
}

//Fazer da fk_categoria e do fk_servico 