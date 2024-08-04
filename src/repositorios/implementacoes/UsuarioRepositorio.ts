import { User, UserAtributtes } from "../../Models/Usuarios";
import { IUsuarioRepositorio } from "../IUsuarioRepositorio";
import { errorMonitor } from "events";

export class UsuarioRepositorio implements IUsuarioRepositorio {

    constructor(
        private userSequelize = User
    ) { }
    async getByEmail(email: string): Promise<boolean> {
        const exists = await this.userSequelize.findOne({ where: { email } })
        console.log(exists?.dataValues.nome)
        return exists ? true : false
    }

    async findById(id: number): Promise<UserAtributtes> {
        return {} as UserAtributtes
    }

    async save(data: UserAtributtes): Promise<boolean> {
        this.userSequelize.create(data)
        return true
    }

    async delete(id: number): Promise<boolean> {
        return true
    }

    async update(data: UserAtributtes): Promise<boolean> {
        return false
    }   
}