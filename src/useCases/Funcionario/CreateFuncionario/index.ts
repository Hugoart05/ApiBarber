import { FuncionarioRepositorio } from "../../../repositorios/implementacoes/FuncionarioRepositorio";
import { UsuarioRepositorio } from "../../../repositorios/implementacoes/UsuarioRepositorio";
import { CreateFuncionarioController } from "./CreateFuncionarioController";
import { CreateFuncionarioUseCase } from "./CreateFuncionarioUseCase";


//repositorios
const funcionarioRepositorio = new FuncionarioRepositorio()
const usuarioRepositorio = new UsuarioRepositorio()

//acoes da entidade
const createFuncionarioUseCase = new CreateFuncionarioUseCase(
    funcionarioRepositorio,
    usuarioRepositorio
)

//Controller
const createFuncionarioController = new CreateFuncionarioController(
    createFuncionarioUseCase
)

export {
    createFuncionarioController
}