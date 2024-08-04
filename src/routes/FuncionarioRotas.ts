import { createFuncionarioController } from '../useCases/Funcionario/CreateFuncionario'
import { Router } from "express";


// rotas.post('/funcionario', (req, res)=>{
//    createFuncionarioController.handle(req,res)
// })
export const funcionarioRotas = Router()
funcionarioRotas.post('/funcionario', (req,res)=>{
    createFuncionarioController.handle(req, res)
})
funcionarioRotas.get('/funcionario/teste', (req, res)=>{return res.send('teste')})

