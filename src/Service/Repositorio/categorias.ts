import { tipoCategoria, tipoValidacao } from '../../@types'
import { categorias } from '../../Models/Categorias'

export async function cadastrarCategoria(categoria: tipoCategoria):Promise<tipoValidacao> {
    const { nome } = categoria

    const {status, mensagem} = await pesquisarCategoria(nome)

    if (status) {
        try {
            await categorias.create({
                nome,
            })
            return {status: true, mensagem:`a categoria ${nome} foi criada com sucesso`}
        } catch (error) {
            return {status: false, mensagem:`Erro ao criar categoria ${nome}: ${error}`}
        }
    } else {
        return {status: false, mensagem: mensagem}
    }
}
export async function pesquisarCategoria(nome: string):Promise<tipoValidacao> {

    const valida = await categorias.findOne({ where: { nome: nome } })
    if (valida === null) {
        return {status:true, mensagem:'essa categoria não existe'}
    } else {
        return {status:false, mensagem:'essa categoria existe'}
    }
}
export async function deletarCategoria(nome: string):Promise<tipoValidacao> {
    const valida = await categorias.findOne({ where: { nome: nome } })
    if (valida === null) {
        return {status:false, mensagem:'categoria nao encontrada'}
    } else {
        try {
            await categorias.destroy({ where: { nome: nome } })
            return {status:true, mensagem:'categoria deletada'}
        } catch (error) {
            return {status:false, mensagem:`erro ao deletar categoria: ${error}`}
        }
    }
}

