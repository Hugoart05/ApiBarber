import { IMailProvider, Mensagem } from "../IMailProvider";
import nodemailer from 'nodemailer'

export class MailProvider implements IMailProvider{
    
    private transportador;
    /**
     *
     */
    constructor() {
        this.transportador = nodemailer.createTransport({
            host:'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth:{
                user:'567e487881dabf',
                pass: 'c5ef49c9068b7f'
            }
        })
    }
    
    async sendEmail(mensagem: Mensagem): Promise<void> {
        await this.transportador.sendMail({
            to:{
                name: mensagem.to.name,
                address: mensagem.from.email
            },
            from:{
                name: mensagem.from.name,
                address: mensagem.from.email,
            },
            subject: mensagem.subject,
            html: mensagem.body
        })
    }
}