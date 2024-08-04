import { User, UserAtributtes } from "../Models/Usuarios";
import { UserDTO } from "../useCases/User/CreateUser/UsuarioDto";

export interface IUsuarioRepositorio{
    getByEmail(email:string):Promise<boolean>
    save(data:UserDTO):Promise<boolean>
    update(data:UserAtributtes):Promise<boolean>
    delete(id:number):Promise<boolean>
    findById(id:number):Promise<UserAtributtes>
}