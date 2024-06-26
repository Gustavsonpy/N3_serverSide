import express from "express";
import db from "../config/database.js";
import Usuario from "../models/usuario_model.js";
import jwt from "jsonwebtoken";

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

export let login = async(req, res) => {
    try{
        const email = req.body.email_user;
        const senha = req.body.senha;
        const usuario = await Usuario.findAll({
            where: {
                email_usuario: req.body.email_user
            }
        })
        usuario.forEach(user =>{
            if(user.email_usuario !== email || user.senha_usuario !== senha){
                console.log(`\n\nEmail: ${user.email_usuario}\n\n`)
                console.log(`\n\Senha: ${user.senha_usuario}\n\n`)
                return res.status(500).send("Login incorreto")
            }
            let dados = {
                id_usuario: user.id_usuario,
                email_usuario: user.email_usuario
            } 
            const token = jwt.sign(dados, process.env.SECRET, {expiresIn: "1h"});
            return res.status(200).send({
                Status: "logado",
                Token: token
            })
        })
    }catch(e){
        return res.status(500).send("Erro ao fazer o login: "+e);
    }
}