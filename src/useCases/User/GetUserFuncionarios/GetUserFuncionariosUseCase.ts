import { IUsuarioRepositorio } from "../../../repositorios/IUsuarioRepositorio";

export class GetUserFuncionarios{
    
    constructor(
        private userRepositorio: IUsuarioRepositorio
    ) 
    {}

    async execute(usuarioId:number){
        const user = await this.userRepositorio.getAllFuncionarios(usuarioId)
        return user
    }
}