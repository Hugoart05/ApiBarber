import { GetUserFuncionarios } from "./GetUserFuncionariosUseCase";
import {Request, Response } from 'express'
export class GetUserFuncionariosController{
    constructor(private getUserFuncionarios: GetUserFuncionarios) {
    }

    async handle(request:Request, response:Response){
        const viewModel = await this.getUserFuncionarios.execute(1)
        response.status(200).json(viewModel)
    }
}