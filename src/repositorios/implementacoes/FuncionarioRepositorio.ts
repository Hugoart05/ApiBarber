import { Funcionario, FuncionarioAtributos } from "../../Models/Funcionario";
import { FuncionarioDTO } from "../../useCases/Funcionario/CreateFuncionario/FuncionarioDTO";
import { IFuncionarioRepositorio } from "../IFuncionarioRepositorio";

export class FuncionarioRepositorio implements IFuncionarioRepositorio {
    constructor(
        private funcionarioSequelize = Funcionario
    ) { }

    async getAll(usuarioId: number): Promise<FuncionarioAtributos[]> {
        return await this.funcionarioSequelize.findAll({ where: { usuarioId } })
    }

    async getByEmail(email: string): Promise<FuncionarioAtributos | null> {
        return await this.funcionarioSequelize.findOne({ where: { email } })
    }

    async update(data: FuncionarioAtributos): Promise<void> {
        const { usuarioId } = data
        await this.funcionarioSequelize.update(data, { where: { usuarioId } })
    }

    async save(data: FuncionarioAtributos): Promise<boolean> {
        try {
            const { email } = data
            await this.funcionarioSequelize.create(data)
            const funcionario = this.funcionarioSequelize.findOne({ where: { email } })
            return funcionario == null ? false : true
        }catch(error){
            console.error(error)
            return false
        }
    }

    async delete(id: number): Promise<void> {
        this.funcionarioSequelize.destroy({ where: { id: id } })
    }
}