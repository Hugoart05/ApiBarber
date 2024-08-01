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
exports.cadastrarCategoria = cadastrarCategoria;
exports.pesquisarServico = pesquisarServico;
exports.deletarServico = deletarServico;
exports.atualizandoServico = atualizandoServico;
var Servico_1 = require("../../Models/Servico");
function cadastrarCategoria(servico) {
    return __awaiter(this, void 0, void 0, function () {
        var nome, _a, status, mensagem, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    nome = servico.nome;
                    return [4 /*yield*/, pesquisarServico(nome)];
                case 1:
                    _a = _b.sent(), status = _a.status, mensagem = _a.mensagem;
                    if (!status) return [3 /*break*/, 6];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Servico_1.servicos.create({
                            nome: nome,
                        })];
                case 3:
                    _b.sent();
                    return [2 /*return*/, { status: true, mensagem: "O servi\u00E7o ".concat(nome, " foi criado com sucesso") }];
                case 4:
                    error_1 = _b.sent();
                    return [2 /*return*/, { status: false, mensagem: "Erro ao criar servi\u00E7o ".concat(nome, ": ").concat(error_1) }];
                case 5: return [3 /*break*/, 7];
                case 6: return [2 /*return*/, { status: false, mensagem: mensagem }];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function pesquisarServico(nome) {
    return __awaiter(this, void 0, void 0, function () {
        var valida;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Servico_1.servicos.findOne({ where: { nome: nome } })];
                case 1:
                    valida = _a.sent();
                    if (valida === null) {
                        return [2 /*return*/, { status: true, mensagem: 'esse serviço não existe' }];
                    }
                    else {
                        return [2 /*return*/, { status: false, mensagem: 'esse serviço existe' }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function deletarServico(nome) {
    return __awaiter(this, void 0, void 0, function () {
        var valida, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Servico_1.servicos.findOne({ where: { nome: nome } })];
                case 1:
                    valida = _a.sent();
                    if (!(valida === null)) return [3 /*break*/, 2];
                    return [2 /*return*/, { status: false, mensagem: 'categoria nao encontrada' }];
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Servico_1.servicos.destroy({ where: { nome: nome } })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, { status: true, mensagem: 'Serviço deletado' }];
                case 4:
                    error_2 = _a.sent();
                    return [2 /*return*/, { status: false, mensagem: "erro ao deletar servi\u00E7o: ".concat(error_2) }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function atualizandoServico(servico) {
    return __awaiter(this, void 0, void 0, function () {
        var id, preco, nome, valida, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = servico.id, preco = servico.preco, nome = servico.nome;
                    return [4 /*yield*/, Servico_1.servicos.findOne({ where: { id: id } })];
                case 1:
                    valida = _a.sent();
                    if (!(valida === null)) return [3 /*break*/, 2];
                    return [2 /*return*/, { status: false, mensagem: "servi\u00E7o nao encontrado" }];
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Servico_1.servicos.update({
                            preco: preco
                        }, {
                            where: { id: id }
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, { status: true, mensagem: "o pre\u00E7o do ".concat(nome, " foi atualizado com sucesso") }];
                case 4:
                    error_3 = _a.sent();
                    return [2 /*return*/, { status: false, mensagem: "erro ao atualiza o pre\u00E7o: ".concat(error_3) }];
                case 5: return [2 /*return*/];
            }
        });
    });
}