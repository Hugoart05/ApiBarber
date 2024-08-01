import {Request, Response} from 'express'
import { tipoUsuario } from "../@types"
import { cadastrarUsuario } from "../Service/Repositorio/usuarios"
import  {validaAtualizacaoUsuario, validarUsuario}  from '../validations/validacaoUsuario'

export async function CadastrarUsuarioNoBanco(req: Request, res: Response){
    const usuario: tipoUsuario = req.body
    const valida = await validarUsuario(usuario)
    if(!valida.status)
        res.status(400).json(valida.mensagem)
    
    const {status, mensagem} = await cadastrarUsuario(usuario)
    if(!status)
        res.status(400).json(mensagem)
        
    res.status(200).json(mensagem)
}

export async function AtualizarUsuarioNoBanco(req:Request, res:Response) {
    try{
        const usuario: tipoUsuario = req.body
        const validacoes = await validaAtualizacaoUsuario(usuario)
        console.log("result:",validacoes)
        return res.status(200).json(validacoes)
    }catch(error){
        return res.send(error)
    }
}