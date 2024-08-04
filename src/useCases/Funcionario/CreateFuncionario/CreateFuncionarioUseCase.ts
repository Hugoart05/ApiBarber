import { IFuncionarioRepositorio } from "../../../repositorios/IFuncionarioRepositorio";
import { IUsuarioRepositorio } from "../../../repositorios/IUsuarioRepositorio";
import { FuncionarioDTO } from "./FuncionarioDTO";

export class CreateFuncionarioUseCase {
    constructor
        (
            private funcionarioRepositorio: IFuncionarioRepositorio,
            private userRepositorio: IUsuarioRepositorio
        ) { }

    async execute({ nome, cargo, usuarioId, email }: FuncionarioDTO) {
        const userExist = this.userRepositorio.findById(usuarioId)
        const funcionarioExist = this.funcionarioRepositorio.getAll(usuarioId)
        console.log(userExist)
        if (userExist == null)
            throw new Error("Usuario não authenticado ou nao existe")

        if(funcionarioExist == null)
            throw new Error("teste")

        this.funcionarioRepositorio.save({ nome, cargo, usuarioId:usuarioId, email })
    }
}