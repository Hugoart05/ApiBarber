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
exports.UsuarioService = void 0;
exports.cadastrarUsuario = cadastrarUsuario;
exports.pesquisarEmail = pesquisarEmail;
exports.atualizandoUsuario = atualizandoUsuario;
exports.deletarUsuario = deletarUsuario;
var Usuarios_1 = require("../../Models/Usuarios");
function cadastrarUsuario(usuario) {
    return __awaiter(this, void 0, void 0, function () {
        var nome, email, telefone, senha, status, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nome = usuario.nome, email = usuario.email, telefone = usuario.telefone, senha = usuario.senha;
                    return [4 /*yield*/, pesquisarEmail(email)];
                case 1:
                    status = (_a.sent()).status;
                    if (!status) return [3 /*break*/, 6];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Usuarios_1.usuarios.create({
                            nome: nome,
                            email: email,
                            telefone: telefone,
                            senha: senha,
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, { status: true, mensagem: "O usuario ".concat(nome, " foi criado com sucesso") }];
                case 4:
                    error_1 = _a.sent();
                    return [2 /*return*/, { status: false, mensagem: "Erro ao criar usuario ".concat(nome, ": ").concat(error_1) }];
                case 5: return [3 /*break*/, 7];
                case 6: return [2 /*return*/, { status: false, mensagem: "email indisponivel" }];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function pesquisarEmail(email) {
    return __awaiter(this, void 0, void 0, function () {
        var validaEmail;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Usuarios_1.usuarios.findOne({ where: { email: email } })];
                case 1:
                    validaEmail = _a.sent();
                    if (validaEmail === null)
                        return [2 /*return*/, { status: true, mensagem: 'email disponivel' }];
                    return [2 /*return*/, { status: false, mensagem: 'email indisponivel' }];
            }
        });
    });
}
function atualizandoUsuario(usuario) {
    return __awaiter(this, void 0, void 0, function () {
        var nome, email, telefone, senha, status, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nome = usuario.nome, email = usuario.email, telefone = usuario.telefone, senha = usuario.senha;
                    return [4 /*yield*/, pesquisarEmail(email)];
                case 1:
                    status = (_a.sent()).status;
                    if (!status) return [3 /*break*/, 2];
                    return [2 /*return*/, { status: false, mensagem: "usuario nao encontrado" }];
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Usuarios_1.usuarios.update({
                            nome: nome,
                            telefone: telefone,
                            senha: senha
                        }, {
                            where: { email: email }
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, { status: true, mensagem: "o usuario foi atualizado com sucesso" }];
                case 4:
                    error_2 = _a.sent();
                    return [2 /*return*/, { status: false, mensagem: "erro ao atualiza o usuario: ".concat(error_2) }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function deletarUsuario(email) {
    return __awaiter(this, void 0, void 0, function () {
        var validaEmail, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Usuarios_1.usuarios.findOne({ where: { email: email } })];
                case 1:
                    validaEmail = _a.sent();
                    if (!(validaEmail === null)) return [3 /*break*/, 2];
                    return [2 /*return*/, { status: false, mensagem: 'usuario nao encontrado' }];
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Usuarios_1.usuarios.destroy({ where: { email: email } })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, { status: true, mensagem: 'usuario deletado' }];
                case 4:
                    error_3 = _a.sent();
                    return [2 /*return*/, { status: false, mensagem: "erro ao deletar usuario: ".concat(error_3) }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
var UsuarioService = /** @class */ (function () {
    function UsuarioService() {
    }
    UsuarioService.prototype.consolelog = function () {
        return ['teste'];
    };
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;