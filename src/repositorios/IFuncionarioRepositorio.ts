import { FuncionarioAtributos } from "../Models/Funcionario"
import { UserAtributtes } from "../Models/Usuarios"
import { FuncionarioDTO } from "../useCases/Funcionario/CreateFuncionario/FuncionarioDTO"
import { UserDTO } from "../useCases/User/CreateUser/UsuarioDto"

export interface IFuncionarioRepositorio{
    getByEmail(email:string):Promise<FuncionarioAtributos | null>
    save(data:Partial<FuncionarioAtributos>):Promise<boolean>
    update(data:FuncionarioAtributos):Promise<void>
    delete(id:number):Promise<void>
    getAll(usuarioId:number):Promise<FuncionarioAtributos[]>
}