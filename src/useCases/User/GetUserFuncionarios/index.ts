import { UsuarioRepositorio } from "../../../repositorios/implementacoes/UsuarioRepositorio";
import { GetUserFuncionarios } from "./GetUserFuncionariosUseCase";
import { GetUserFuncionariosController } from "./GetUserFuncionariosController";


const userRepositorio = new UsuarioRepositorio()
const getUserFuncionarios = new GetUserFuncionarios(
    userRepositorio
)

const getUserFuncionariosController = new GetUserFuncionariosController(
    getUserFuncionarios
)

export {
    getUserFuncionariosController
}