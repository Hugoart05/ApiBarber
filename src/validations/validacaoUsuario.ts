import { tipoUsuario, tipoValidacao } from "../@types"
import { pesquisarEmail } from "../Service/Repositorio/usuarios"
import { validarCampos, validarCaracteresEmail } from "./validacoesGlobais"

export async function validarUsuario(usuario: tipoUsuario): Promise<tipoValidacao> {

    const campos = validarCampos(usuario)
    if (!campos.status)
        return { status: campos.status, mensagem: campos.mensagem }

    const Email = validarCaracteresEmail(usuario.email)
    if (!Email.status)
        return { status: Email.status, mensagem: Email.mensagem }

    const senha = validaSenha(usuario.senha)
    if (!senha.status)
        return { status: senha.status, mensagem: senha.mensagem }

    const telefone = validaTelefone(usuario.telefone)
    if (!telefone.status)
        return { status: telefone.status, mensagem: telefone.mensagem }

    const emailBanco = await pesquisarEmail(usuario.email)
    return { status: emailBanco.status, mensagem: emailBanco.mensagem }

}

function validaSenha(senha: string): tipoValidacao {

    const regex = /^(?=.*[A-Za-z]).{6,}$/

    if (!regex.test(senha)) {
        return { status: false, mensagem: 'Senha precisa ter pelo menos uma letra e no minimo 6 carateres' }
    }
    return { status: true, mensagem: 'senha ok' }
}

function validaTelefone(telefone: string) {
    if (telefone.length === 11) {
        return { status: true, mensagem: 'senha ok' }
    }
    return { status: false, mensagem: 'O telefone precisa ter exatamente 11 carateres' }
}

export async function validaAtualizacaoUsuario(usuario: tipoUsuario): Promise<string[] | []> {
    let erro:string[] = []
    const camposValidacao = validarCampos(usuario)
    
    if (!camposValidacao.status)
        erro.push(camposValidacao.mensagem)

    const emailValidacao = await pesquisarEmail(usuario.email)
    if (!emailValidacao.status)
        erro.push(emailValidacao.mensagem)

    const validasenha = validaSenha(usuario.senha)
    if (!validasenha.status)
        erro.push(validasenha.mensagem)
    
    const validatelefone = validaTelefone(usuario.telefone)
    if(!validatelefone.status)
        erro.push(validatelefone.mensagem)

    return erro
}