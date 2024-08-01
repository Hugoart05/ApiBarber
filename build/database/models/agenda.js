"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acidicionarAgenda = acidicionarAgenda;
var tabelas_1 = require("./tabelas");
var date = Date.now;
function acidicionarAgenda() {
    tabelas_1.agenda.create({
        funcionario_id: 1,
        cliente_id: 1,
        servico_id: 1,
        metodo_de_pagamento: 'pix',
        data: ''
    });
}
