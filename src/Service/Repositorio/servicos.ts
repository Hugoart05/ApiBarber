import { tipoServicos, tipoValidacao } from '../../@types'
import { servicos } from '../../Models/Servico'

export async function cadastrarCategoria(servico: tipoServicos):Promise<tipoValidacao> {
    const { nome } = servico

    const {status, mensagem} = await pesquisarServico(nome)

    if (status) {
        try {
            await servicos.create({
                nome,
            })
            return {status: true, mensagem:`O serviço ${nome} foi criado com sucesso`}
        } catch (error) {
            return {status: false, mensagem:`Erro ao criar serviço ${nome}: ${error}`}
        }
    } else {
        return {status: false, mensagem: mensagem}
    }
}
export async function pesquisarServico(nome: string):Promise<tipoValidacao> {

    const valida = await servicos.findOne({ where: { nome: nome } })
    if (valida === null) {
        return {status:true, mensagem:'esse serviço não existe'}
    } else {
        return {status:false, mensagem:'esse serviço existe'}
    }
}
export async function deletarServico(nome: string):Promise<tipoValidacao> {
    const valida = await servicos.findOne({ where: { nome: nome } })
    if (valida === null) {
        return {status:false, mensagem:'categoria nao encontrada'}
    } else {
        try {
            await servicos.destroy({ where: { nome: nome } })
            return {status:true, mensagem:'Serviço deletado'}
        } catch (error) {
            return {status:false, mensagem:`erro ao deletar serviço: ${error}`}
        }
    }
}
export async function atualizandoServico(servico:tipoServicos):Promise<tipoValidacao> {
    const {id, preco, nome} = servico
    const valida = await servicos.findOne({ where: { id: id } })

    if (valida === null) {
        return {status:false, mensagem:`serviço nao encontrado`}
    } else {
        try {
            await servicos.update(
                {
                preco: preco
            },
            {
                where: {id: id}
            })
            return {status:true, mensagem:`o preço do ${nome} foi atualizado com sucesso`}
        } catch (error) {
            return {status:false, mensagem:`erro ao atualiza o preço: ${error}`}
        }
    } 
}