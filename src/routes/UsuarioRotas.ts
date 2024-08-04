import {Router} from 'express'
import { createUsuarioController } from '../useCases/User/CreateUser'
import { createFuncionarioController } from '../useCases/Funcionario/CreateFuncionario'



const userRotas = Router()

userRotas.post('/user',  (req, res)=>{
    createUsuarioController.handle(req, res)
})


export default userRotas