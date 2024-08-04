import express from 'express'
import 'dotenv/config'
import { sequelize } from './db/Instancia'
import { funcionarioRotas } from './routes/FuncionarioRotas'
import userRotas, { } from './routes/UsuarioRotas'
import { createUsuarioController } from './useCases/User/CreateUser'

const app = express()
app.use(express.json())
//Routes 
app.use(funcionarioRotas)
app.use(userRotas)

//
app.listen(process.env.PORT,async () => {
    try{
        await sequelize.authenticate();
        console.log("sequelize: autenticacão no banco realizada")
        const sinc = await sequelize.sync({force:true})
        console.log("atualização de tabelas realizada com sucesso!")
        console.log("Servidor rodando na porta 8080")
    }catch(error){
        console.log(error)
    }
    console.log(`servidor rodando na porta ${process.env.PORT}`)
})
