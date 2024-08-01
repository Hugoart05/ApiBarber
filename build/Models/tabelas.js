"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarTabelas = criarTabelas;
var Instancia_1 = require("../db/Instancia");
var Usuarios_1 = require("./Usuarios");
var Estabelecimento_1 = require("./Estabelecimento");
var Categorias_1 = require("./Categorias");
var Funcionario_1 = require("./Funcionario");
var Agenda_1 = require("./Agenda");
var Servico_1 = require("./Servico");
function criarTabelas() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //  faz os relacionamentos  1 pra 1 
                    Estabelecimento_1.estabelecimento.belongsTo(Usuarios_1.usuarios, { foreignKey: 'id' });
                    Estabelecimento_1.estabelecimento.belongsTo(Categorias_1.categorias, { foreignKey: 'id' });
                    Funcionario_1.funcionarios.belongsTo(Usuarios_1.usuarios, { foreignKey: 'id' });
                    Agenda_1.agenda.belongsTo(Funcionario_1.funcionarios, { foreignKey: 'id' });
                    Agenda_1.agenda.belongsTo(Usuarios_1.usuarios, { foreignKey: 'id' });
                    Agenda_1.agenda.belongsTo(Servico_1.servicos, { foreignKey: 'id' });
                    // faz relacionamentos mts pra mts e cria a tabela
                    Funcionario_1.funcionarios.belongsToMany(Servico_1.servicos, { through: 'funcionarios_servicos', foreignKey: 'funcionarios_id' });
                    Servico_1.servicos.belongsToMany(Funcionario_1.funcionarios, { through: 'funcionarios_servicos', foreignKey: 'servicos_id' });
                    //  cria as tabelas 
                    return [4 /*yield*/, Instancia_1.sequelize.sync().then(function () {
                            console.log('Tabelas sincronizadas');
                        }).catch(function (error) { return console.log('Erro ao sincronizar tabelas: ', error); })];
                case 1:
                    //  cria as tabelas 
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
