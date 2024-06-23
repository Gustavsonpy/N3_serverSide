import prestador from "../models/prestador_model";

export let createPrestador = async(req, res) => {
    try{
        const prestadorCreated = await prestador.create({
            
        }) 
    }catch(e){

    }
}

export let getPrestadores = async(req, res) => {
    try{
        const prestadores = await prestador.getAll();
        res.send(prestadores);
    }catch(e){
        console.log("Erro ao resgatar os prestadores!");
    }
}

export let getPrestadoresBy = async(req, res) => {
    try{
        const prestadores = await prestador.getAll();
        res.send(prestadores);
    }catch(e){
        console.log("Erro ao resgatar os prestadores!");
    }
}