import {Router} from 'express'
import { AtualizarUsuarioNoBanco, CadastrarUsuarioNoBanco } from '../controllers/usuarioController'
import { atualizandoUsuario } from '../database/models/usuarios'


const rotas = Router()

rotas.get('/',(req, res)=>{
    res.send('chegou aqui')
})

rotas.post('/cadastroUsuario',CadastrarUsuarioNoBanco)
rotas.post('/atualizarUsuario',AtualizarUsuarioNoBanco)

export default rotas