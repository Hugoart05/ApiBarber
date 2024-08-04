import { MailProvider } from "../../../provedores/implementatcoes/MailProvider";
import { UsuarioRepositorio } from "../../../repositorios/implementacoes/UsuarioRepositorio";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usuarioRepositorio  =new UsuarioRepositorio()
const mailProvider = new MailProvider()

const createUserUseCase = new CreateUserUseCase(
    usuarioRepositorio,
    mailProvider
)

const createUsuarioController = new CreateUserController(
    createUserUseCase
)

export {
    createUsuarioController
}