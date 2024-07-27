import express from 'express'
import {criarTabelas} from './database/model/tabelas'
import { tipoUsuario } from './@types'
import { atualizandoUsuario, deletarUsuario} from './database/model/usuarios'
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
    const {mensagem} = await deletarUsuario(usuario.email)
    console.log(mensagem)
}
// teste()
app.listen(8080,()=>{
    // criarTabelas()
    console.log(`servidor rodando na porta 8080`)
})