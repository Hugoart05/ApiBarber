import {Router} from 'express'
import { createUsuarioController } from '../useCases/User/CreateUser'
import { createFuncionarioController } from '../useCases/Funcionario/CreateFuncionario'
import { getUserFuncionariosController } from '../useCases/User/GetUserFuncionarios'



const userRotas = Router()

userRotas.post('/user',  (req, res)=>{
    createUsuarioController.handle(req, res)
})

userRotas.get('/user/funcionarios', (req,res)=>{
    getUserFuncionariosController.handle(req,res)
})

userRotas.get('/user/search',()=>{
    
})



export default userRotas