import express from "express";
import db from "../config/database.js";
import Usuario from "../models/usuario_model.js";

async function syncDatabase() {
    await db.sync();
}

syncDatabase();

//-------------------------------------------------------------------------------
//CREATE   
export let createUser = async(req, res) => {
    try{
        const userCreated = await Usuario.create({
            nome: req.body.nome,
            senha_usuario: req.body.senha_usuario,
            email_usuario: req.body.email_usuario,
        })
        res.status(200).send(userCreated);
    }catch(e){
        res.status(500).send("Algo deu errado com a criação do usuário!\n\n")
    }
}

//-------------------------------------------------------------------------------
//READ
export let getUser = async(req, res) => {
    try{
        const users = await Usuario.findAll();
        res.status(200).send(users);
    }catch(e){
        res.status(500).send("Erro ao resgatar os usuários!");
        console.log("Erro:\n\n", e);
    }
}

export let updateNameUser = async(req, res) =>{
    try{
        let user = await Usuario.findByPk(req.params.id_usuario);
        if(user){
            user.nome = req.body.nome;
            await user.save();
            res.status(200).send("Nome atualizado com sucesso!");
        }
        else{
            res.status(500).send("Erro ao encontar o id do usuário");
        }
    }catch(e){
        res.status(500).send("Não foi possível atualizar o nome do usuário\n");
        console.log("Erro:\n\n", e);
    }
}

export let deleteUser = async(req, res) => {
    try{
        let user = await Usuario.findByPk(req.params.id_usuario);
        if(user){
            user.destroy();
            res.status(200).send("Usuário excluído com sucesso!");
        }
    }catch(e){
        res.status(500).send("Erro ao excluir o usuário!");
    }
}