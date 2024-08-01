"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var tabelas_1 = require("./Models/tabelas");
require("dotenv/config");
var rotas_1 = __importDefault(require("./routes/rotas"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var path_1 = __importDefault(require("path"));
var yamljs_1 = __importDefault(require("yamljs"));
var routes_1 = require("./routes/routes");
var app = (0, express_1.default)();
app.use(rotas_1.default);
var swaggerDocument = yamljs_1.default.load(path_1.default.join(__dirname, '../api-docs/swagger.yaml'));
app.use(express_1.default.json());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
(0, routes_1.RegisterRoutes)(app);
app.listen(process.env.PORT, function () {
    (0, tabelas_1.criarTabelas)();
    console.log("servidor rodando na porta ".concat(process.env.PORT));
});
