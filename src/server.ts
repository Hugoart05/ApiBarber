import express from 'express'
import {criarTabelas} from './database/model/tabelas'
const app = express()

criarTabelas()

app.listen(8080,()=>{
    console.log(`servidor rodando na porta 8080`)
})