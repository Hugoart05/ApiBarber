import express from 'express'
import {TabelaUsuarios} from './database/model/tabelas'
const app = express()

TabelaUsuarios()
app.listen(8080,()=>{
    console.log(`servidor rodando na porta 8080`)
})