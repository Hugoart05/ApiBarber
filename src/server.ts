import express from 'express'
import {criarTabelas} from './Models/tabelas'
import { tipoUsuario } from './@types'
import { adicionarFuncionarios_servicos } from './Service/Repositorio/funcionarios_servicos'
import 'dotenv/config'
import rotas from './routes/rotas'


const app = express()
app.use(express.json())
app.use(rotas)


app.listen(process.env.PORT,()=>{
    criarTabelas()
    console.log(`servidor rodando na porta ${process.env.PORT}`)
})