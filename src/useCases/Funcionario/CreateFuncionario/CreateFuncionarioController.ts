import { CreateFuncionarioUseCase } from "./CreateFuncionarioUseCase";
import { FuncionarioDTO } from "./FuncionarioDTO";
import { Request, Response } from 'express'

export class CreateFuncionarioController {
    constructor(
        private createFuncionarioUseCase: CreateFuncionarioUseCase,
    ) { }

    async handle(request: Request, response: Response) {
        try {
            const {cargo, nome, email, usuarioId} = request.body
            
            this.createFuncionarioUseCase.execute({
                cargo:cargo,
                nome,
                usuarioId,
                email
            })
            return response.status(200).send("Usuario criado com sucesso!")
        } catch (error) {
            return response.json({
                message: 'error'
            })
        }
    }
}