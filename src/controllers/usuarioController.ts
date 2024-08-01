import {Request, Response} from 'express'
import { tipoUsuario } from "../@types"
import { cadastrarUsuario, UsuarioService } from "../Service/Repositorio/usuarios"
import  {validaAtualizacaoUsuario, validarUsuario}  from '../validators/validacaoUsuario'
import { Body, Controller, Get, Route, Tags } from 'tsoa'
import { get } from 'http'

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

@Route('usuarios')
@Tags("Usuarios")
export class UsuarioController extends Controller{
    private usuairoService = new UsuarioService();

    @Get('/')
    public async getUsuario():Promise<string[]>{
        return this.usuairoService.consolelog()
    }
   
}