import Servico from "../models/servico_model.js";
import db from "../config/database.js";
import Prestador from "../models/prestador_model.js";

async function syncDatabase() {
    await db.sync(); //Ver se é servico
}

syncDatabase();

//-------------------------------------------------------------------------------
//CREATE   
export let createServico = async(req, res) => {
    try{
        const servicoCreated = await Servico.create({
            nome_servico: req.body.nome_servico,
            valor_servico: req.body.valor_servico,
        })
        res.status(200).send(servicoCreated);
    }catch(e){
        res.status(500).send("Algo deu errado com a criação do serviço!\n\n")
    }
}

//-------------------------------------------------------------------------------
//READ
export let getServicos = async(req, res) => {
    try{
        const servicos = await Servico.findAll();
        res.status(200).send(servicos);
    }catch(e){
        res.status(500).send("Erro ao resgatar os servicos!");
        console.log("Erro:\n\n", e);
    }
}

export let getServicoByName = async(req, res) => {
    try{
        const servicos = await Servico.findAll({
            where: {
                nome_servico: req.params.nome_servico
            }
        });
        if(servicos.length < 1) return res.status(500).send("Não existe este tipo de serviço")
        res.status(500).send(servicos);
    }catch(e){
        console.log("Erro ao resgatar os serviços!");
    }
}

export let getServicoByValor = async(req, res) => {
    try{
        const servicos = await Servico.findAll({
            where: {
                valor_servico: req.params.valor_servico
            }
        });
        if(servicos.length < 1) return res.status(500).send("Não existe este tipo de serviço")
        res.status(500).send(servicos);
    }catch(e){
        console.log("Erro ao resgatar os serviços!");
    }
}

//-------------------------------------------------------------------------------
//UPDATE
export let updateNameServico = async(req, res) =>{
    try{
        let servico = await Servico.findByPk(req.params.id_servico);
        if(servico){
            servico.nome_servico = req.body.nome_servico;
            await servico.save();
            res.status(200).send("Nome atualizado com sucesso!");
        }
        else{
            res.status(500).send("Erro ao encontar o id do serviço");
        }
    }catch(e){
        res.status(500).send("Não foi possível atualizar o nome do servico\n");
        console.log("Erro:\n\n", e);
    }
}

export let updatePrecoServico = async(req, res) =>{
    try{
        let preco = await Servico.findByPk(req.params.id_servico);
        if(preco){
            preco.valor_servico = req.body.valor_servico;
            await preco.save();
            res.status(200).send("Valor atualizado com sucesso!");
        }
        else{
            res.status(500).send("Erro ao encontar o id do serviço");
        }
    }catch(e){
        res.status(500).send("Não foi possível atualizar o valor do servico\n");
        console.log("Erro:\n\n", e);
    }
}

export let getPriceServicoByHour = async(req, res) => {
    //Verificar porque ele não encontra prestador
    console.log(`\n\nTempo: ${req.body.tempo_experiencia}\n\n`)
   const prestador = await Prestador.findAll({
    where: {
        tempo_experiencia: req.body.tempo_experiencia
    }
   })
   if(prestador){console.log(`\n\nACHOU PRESTADOR: ${prestador}\n\n`);}
   const horas = req.body.horasServico

   let valorFixo = 50.00
   let valorTotal = valorFixo * horas
   
   if(prestador.tempo_experiencia < 1){
        if(prestador.tempo_experiencia = 2){(valorTotal += (20/100 * valorTotal))}
        if(prestador.tempo_experiencia > 2 && prestador.tempo_experiencia <= 5){(valorTotal += (40/100 * valorTotal))}
        if(prestador.tempo_experiencia > 5){(valorTotal += (65/100 * valorTotal))}
        res.status(200).send(`Valor total do serviço: R$${valorTotal}`)
    }else{res.status(500).send(`Tempo de experiência insuficiente!\n\nTempo: ${prestador.tempo_experiencia}`)
    }
}

//-------------------------------------------------------------------------------
//DELETE
export let deleteServico = async(req, res) => {
    try{
        let servico = await Servico.findByPk(req.params.id_servico);
        if(servico){
            servico.destroy();
            res.status(200).send("Serviço deletado com sucesso!");
        }
    }catch(e){
        res.status(500).send("Erro ao deletar serviço!");
    }
}