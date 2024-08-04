import { IMailProvider } from "../../../provedores/IMailProvider";
import { IUsuarioRepositorio } from "../../../repositorios/IUsuarioRepositorio";
import { UserDTO } from "./UsuarioDto";

export class CreateUserUseCase {
    constructor(
        private userRepositorio: IUsuarioRepositorio,
        private mailProvedor: IMailProvider
    ) { }

    async execute(user: UserDTO) {
        const existsUsuario = await this.userRepositorio.getByEmail(user.email)
        if (existsUsuario)
            throw new Error("Esse usuario ja existe na base de dados")
        
        const result = await this.userRepositorio.save(user)
        if (result)
            throw new Error('erro ao criar o usuario')

        await this.mailProvedor.sendEmail({
            to: {
                email: user.email,
                name: user.nome
            },
            from: {
                name: 'Equipe do meu aplicativo',
                email: 'emaildaequipe@gmail.com',
            },
            subject: "Seja bem vindo a plataforma",
            body: "<p>Você ja pode acessar a plataforma</p>"
        })
    }
}