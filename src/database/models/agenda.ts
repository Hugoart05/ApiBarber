import { agenda } from "./tabelas"

const date = Date.now()
const data = new Date(date)


export function acidicionarAgenda() {
    
    agenda.create({
        funcionario_id: 1,
        cliente_id: 1,
        servico_id: 1,
        metodo_de_pagamento: 'pix',
        data: data
    })
}