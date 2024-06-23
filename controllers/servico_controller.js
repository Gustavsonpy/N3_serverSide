import Servico from "../models/servico_model.js";
import db from "../config/database.js";

async function syncDatabase() {
    await db.sync(); //Ver se é servico
}

syncDatabase();

export let createServico = async(req, res) => {
    try{
        const servicoCreated = await Servico.create({
            nome_servico: req.body.nome_servico,
            valor_servico: req.body.valor_servico,
        })
        res.status(200).send(servicoCreated);
    }catch(e){
        // res.status(500).send("Algo deu errado com a criação do serviço!\n\n")
        console.log("Algo deu errado com a criação do serviço!\n\n", e)
    }
}

// export let getPrestadores = async(req, res) => {
//     try{
//         const prestadores = await prestador.findAll();
//         res.send(prestadores);
//     }catch(e){
//         console.log("Erro ao resgatar os prestadores!");
//     }
// }

// export let getPrestadoresBy = async(req, res) => {
//     try{
//         const prestadores = await prestador.findAll();
//         res.send(prestadores);
//     }catch(e){
//         console.log("Erro ao resgatar os prestadores!");
//     }
// }

// export let updateNamePrestador = async(req, res) =>{
//     try{
//         if(prestador.findByPk(req.body.id_prestador)){
//             prestador.nome_prestador = req.body.nome_prestador;
//             await prestador.save();
//         }
//         else{
//             res.send("Erro ao encontar o id do prestador");
//         }
//     }catch(e){
//         res.status(500).send("Não foi possível atualizar o nome do prestador\n", e);
//     }
// }

// export let updateExperienciaPrestador = async(req, res) =>{
//     try{
//         if(prestador.findByPk(req.body.id_prestador)){
//             prestador.tempo_experiencia = req.body.tempo_experiencia;
//             await prestador.save();
//         }
//         else{
//             res.send("Erro ao encontar o id do prestador");
//         }
//     }catch(e){
//         res.status(500).send("Não foi possível atualizar o tempo de experiencia do prestador\n", e);
//     }
// }

//Fazer da fk_categoria e do fk_servico 