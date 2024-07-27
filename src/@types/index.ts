
export interface tipoUsuario{
    id: number
    nome: string
    email: string
    telefone: string
    senha: string
}

export interface tipoValidacao{
    status: boolean
    mensagem: string
}

export interface tipoCategoria{
    id: number
    nome: string
}