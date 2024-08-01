import {Router} from 'express'
import { AtualizarUsuarioNoBanco, CadastrarUsuarioNoBanco } from '../controllers/usuarioController'
import { sequelize } from '../db/Instancia'


const rotas = Router()


rotas.get('/',(req, res)=>{
    const user = sequelize.query("SELECT *  FROM usuarios")
    res.send({message:'usuario', entities: user})
})

rotas.post('/cadastroUsuario',CadastrarUsuarioNoBanco)
rotas.post('/atualizarUsuario',AtualizarUsuarioNoBanco)

export default rotas