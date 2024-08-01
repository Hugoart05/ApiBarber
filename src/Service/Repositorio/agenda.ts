import { agenda } from "../../Models/Agenda"
import { GetDataAtual } from "../../Utils/DataUtils"


export function acidicionarAgenda() {
    agenda.create({
        funcionario_id: 1,
        cliente_id: 1,
        servico_id: 1,
        metodo_de_pagamento: 'pix',
        data: GetDataAtual()
    })
}