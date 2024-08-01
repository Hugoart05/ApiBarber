"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcionariosServicos = void 0;
var sequelize_1 = require("sequelize");
var Instancia_1 = require("../db/Instancia");
var Funcionario_1 = require("./Funcionario");
var Servico_1 = require("./Servico");
exports.funcionariosServicos = Instancia_1.sequelize.define('funcionarios_servicos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    funcionarios_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Funcionario_1.funcionarios,
            key: 'id'
        }
    },
    servicos_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Servico_1.servicos,
            key: 'id'
        }
    },
}, {
    timestamps: false
});
