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
exports.adicionarFuncionario = adicionarFuncionario;
exports.pesquisarFuncionario = pesquisarFuncionario;
exports.pesquisarFuncionarios = pesquisarFuncionarios;
exports.deletarFuncionario = deletarFuncionario;
var tabelas_1 = require("./tabelas");
function adicionarFuncionario(id) {
    return __awaiter(this, void 0, void 0, function () {
        var usuario, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tabelas_1.usuarios.findByPk(id)];
                case 1:
                    usuario = _a.sent();
                    if (usuario === null) {
                        return [2 /*return*/, { status: false, mensagem: ' usuario não encontrado' }];
                    }
                    return [4 /*yield*/, tabelas_1.funcionarios.findByPk(id)];
                case 2:
                    result = _a.sent();
                    if (!(result === null)) return [3 /*break*/, 4];
                    return [4 /*yield*/, tabelas_1.funcionarios.create({
                            usuario_id: id
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, { status: true, mensagem: ' funcionario cadastrado com sucesso' }];
                case 4: return [2 /*return*/, { status: false, mensagem: 'este funcionario ja existe' }];
            }
        });
    });
}
function pesquisarFuncionario(id) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, ((_a = tabelas_1.funcionarios.sequelize) === null || _a === void 0 ? void 0 : _a.query("\n        SELECT * FROM funcionarios as f \n        inner join usuarios as u on u.id = f.usuario_id\n        where  f.id = ".concat(id, ";\n        ")))];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result === null || result === void 0 ? void 0 : result[0]];
            }
        });
    });
}
function pesquisarFuncionarios() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, ((_a = tabelas_1.funcionarios.sequelize) === null || _a === void 0 ? void 0 : _a.query("\n        SELECT * FROM funcionarios as f \n        inner join usuarios as u on u.id = f.usuario_id\n        where u.id = f.usuario_id;"))];
                case 1:
                    result = _b.sent();
                    return [2 /*return*/, result === null || result === void 0 ? void 0 : result[0]];
            }
        });
    });
}
function deletarFuncionario(id) {
    return __awaiter(this, void 0, void 0, function () {
        var valida, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tabelas_1.funcionarios.findOne({ where: { id: id } })];
                case 1:
                    valida = _a.sent();
                    if (!(valida === null)) return [3 /*break*/, 2];
                    return [2 /*return*/, { status: false, mensagem: 'funcionario nao encontrada' }];
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, tabelas_1.funcionarios.destroy({ where: { id: id } })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, { status: true, mensagem: 'Funcionario deletado' }];
                case 4:
                    error_1 = _a.sent();
                    return [2 /*return*/, { status: false, mensagem: "erro ao deletar funcionario: ".concat(error_1) }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
