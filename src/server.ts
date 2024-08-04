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
app.listen(process.env.PORT, () => {
    sequelize.sync()
    console.log(`servidor rodando na porta ${process.env.PORT}`)
})
