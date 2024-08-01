import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import { Express } from 'express';

const swaggerSpec = swaggerJSDoc({
    definition: {
        swagger: '2.0',
        info: {
            title: 'API Example',
            version: '1.0.0',
            description: 'Documentação da API Example',
        },
        host: 'localhost:8080', // Ajuste para o host do seu servidor
        basePath: '/', // Caminho base da API
        schemes: ['http'], // Schemes suportados, pode ser http ou https
        
    },
    apis: ['./routes/**/*.js'], 
    // Caminho para os arquivos com anotações Swagger
});


export function configSwagger(app:Express){
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}