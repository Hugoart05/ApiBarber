"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarioController_1 = require("../controllers/usuarioController");
var Instancia_1 = require("../db/Instancia");
var rotas = (0, express_1.Router)();
rotas.get('/', function (req, res) {
    var user = Instancia_1.sequelize.query("SELECT *  FROM usuarios");
    res.send({ message: 'usuario', entities: user });
});
rotas.post('/cadastroUsuario', usuarioController_1.CadastrarUsuarioNoBanco);
rotas.post('/atualizarUsuario', usuarioController_1.AtualizarUsuarioNoBanco);
exports.default = rotas;
