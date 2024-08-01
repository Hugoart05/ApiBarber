import { tipoValidacao } from "../@types";


export function validarCampos(dados: any): tipoValidacao{
    for(const [chave, valor] of Object.entries(dados)){
        if(valor === '' || valor === null || valor === undefined){
            return {status: false, mensagem:`O campo ${chave} esta invalido podendo estar vazio, nulo ou indefinido`}
        }
    }
    return {status: true, mensagem:'campos com dados'}
}


export function validarCaracteresEmail(email: string): tipoValidacao {
    // Expressão regular para validar o e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@\.]+$/

    if (!emailRegex.test(email)) {
        return {
            status: false,
            mensagem: 'E-mail inválido'
        };
    }

    return {
        status: true,
        mensagem: 'E-mail válido'
    };
}
