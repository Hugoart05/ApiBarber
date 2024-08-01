import express from 'express'
import { criarTabelas } from './Models/tabelas'
import 'dotenv/config'
import rotas from './routes/rotas'
import swaggerUi from 'swagger-ui-express'
import path from 'path'
import YAML from 'yamljs'
import { RegisterRoutes } from './routes/routes'



const app = express()


const swaggerDocument = YAML.load(path.join(__dirname, '../api-docs/swagger.yaml'));

app.use(rotas)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json())
RegisterRoutes(app)

app.listen(process.env.PORT, () => {
    criarTabelas()
    console.log(`servidor rodando na porta ${process.env.PORT}`)
})