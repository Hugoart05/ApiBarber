export interface IEndereco{
    email:string
    name:string
}

export interface Mensagem{
    to:IEndereco
    from:IEndereco
    subject:string
    body:string
}

export interface IMailProvider{
    sendEmail(mensagem:Mensagem):Promise<void>
}