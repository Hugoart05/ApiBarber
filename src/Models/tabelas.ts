import {  DataTypes } from 'sequelize'
import { sequelize } from '../db/Instancia'
import { usuarios } from './Usuarios'
import { estabelecimento } from './Estabelecimento'
import { categorias } from './Categorias'
import { funcionarios } from './Funcionario'
import { agenda } from './Agenda'
import { servicos } from './Servico'

export async function criarTabelas() {
    //  faz os relacionamentos  1 pra 1 
    estabelecimento.belongsTo(usuarios, { foreignKey: 'id' })
    estabelecimento.belongsTo(categorias, { foreignKey: 'id' })
    funcionarios.belongsTo(usuarios, { foreignKey: 'id' })
    agenda.belongsTo(funcionarios, { foreignKey: 'id' })
    agenda.belongsTo(usuarios, { foreignKey: 'id' })
    agenda.belongsTo(servicos, { foreignKey: 'id' })

    // faz relacionamentos mts pra mts e cria a tabela
    funcionarios.belongsToMany(servicos, { through: 'funcionarios_servicos', foreignKey: 'funcionarios_id' })
    servicos.belongsToMany(funcionarios, { through: 'funcionarios_servicos', foreignKey: 'servicos_id' })

    //  cria as tabelas 
    await sequelize.sync().then(() => {
        console.log('Tabelas sincronizadas')
    }).catch(error => console.log('Erro ao sincronizar tabelas: ', error))
}







