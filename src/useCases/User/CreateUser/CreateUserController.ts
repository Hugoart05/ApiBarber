import { CreateUserUseCase } from "./CreateUserUseCase";
import {Request, Response} from 'express'

export class CreateUserController{
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(request:Request, response:Response):Promise<Response>{
        try{
            if(!request.body){
                return response.status(400).json({message:"Todos os campos são requeridos"})
            }
            const {name, email, password} = await request.body

            await this.createUserUseCase.execute({
                nome: name,
                email: email,
                senha:password,
                telefone: '24998790213'
            })
            
            return  response.status(200).json('Usuario criado com sucesso!')
        }catch(error){
            return response.status(400).json({
                message: 'error: ' + error
            })
        }
    }
}