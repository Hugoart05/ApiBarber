import { tipoUsuario, tipoValidacao } from "../../@types"
import { usuarios } from "./tabelas"


export async function cadastrarUsuario(usuario: tipoUsuario):Promise<tipoValidacao> {
    const { nome, email, telefone, senha } = usuario

    const {status} = await pesquisarEmail(email)
    if (status) {
        try {
            await usuarios.create({
                nome,
                email,
                telefone,
                senha,
            })
            return {status: true, mensagem:`O usuario ${nome} foi criado com sucesso`}
        } catch (error) {
            return {status: false, mensagem:`Erro ao criar usuario ${nome}: ${error}`}
        }
    } else {
        return {status: false, mensagem:`email indisponivel`}
    }


}
export async function pesquisarEmail(email: string):Promise<tipoValidacao> {

    const validaEmail = await usuarios.findOne({ where: { email: email } })
    if (validaEmail === null) {
        return {status:true, mensagem:'email disponivel'}
    } else {
        return {status:false, mensagem:'email indisponivel'}
    }


}
export async function atualizandoUsuario(usuario:tipoUsuario):Promise<tipoValidacao> {
    const {nome, email, telefone, senha} = usuario
    const {status} = await pesquisarEmail(email)

    if (status) {
        return {status:false, mensagem:`usuario nao encontrado`}
    } else {
        try {
            await usuarios.update(
                {
                nome: nome,
                telefone: telefone,
                senha: senha
            },
            {
                where: {email: email}
            })
            return {status:true, mensagem:`o usuario foi atualizado com sucesso`}
        } catch (error) {
            return {status:false, mensagem:`erro ao atualiza o usuario: ${error}`}
        }
    }
    
    
}
export async function deletarUsuario(email: string):Promise<tipoValidacao> {
    const validaEmail = await usuarios.findOne({ where: { email: email } })
    if (validaEmail === null) {
        return {status:false, mensagem:'usuario nao encontrado'}
    } else {
        try {
            usuarios.destroy({ where: { email: email } })
            return {status:true, mensagem:'usuario deletado'}
        } catch (error) {
            return {status:false, mensagem:`erro ao deletar usuario: ${error}`}
        }
    }
}