"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSwagger = configSwagger;
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swaggerSpec = (0, swagger_jsdoc_1.default)({
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
function configSwagger(app) {
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
}
