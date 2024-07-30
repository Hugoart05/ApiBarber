import express from 'express'
import {criarTabelas} from './database/models/tabelas'
import { tipoUsuario } from './@types'
import { adicionarFuncionarios_servicos } from './database/models/funcionarios_servicos'
const app = express()

const usuario: tipoUsuario ={
    id: 0,
    nome:'usuario 04',
    email:'usuario4@user.com',
    telefone:'(xx)xxxxx-xxxx',
    senha:'123465'
}

// cadastrarUsuario(usuario)
async function teste(){
    await adicionarFuncionarios_servicos(1,'corte na tesoura')
}

teste()
app.listen(8080,()=>{
    // criarTabelas()
    console.log(`servidor rodando na porta 8080`)
})