"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acidicionarAgenda = acidicionarAgenda;
var Agenda_1 = require("../../Models/Agenda");
var DataUtils_1 = require("../../Utils/DataUtils");
function acidicionarAgenda() {
    Agenda_1.agenda.create({
        funcionario_id: 1,
        cliente_id: 1,
        servico_id: 1,
        metodo_de_pagamento: 'pix',
        data: (0, DataUtils_1.GetDataAtual)()
    });
}
