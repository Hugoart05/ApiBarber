"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agenda = void 0;
var sequelize_1 = require("sequelize");
var Instancia_1 = require("../db/Instancia");
var Funcionario_1 = require("./Funcionario");
var Usuarios_1 = require("./Usuarios");
var Servico_1 = require("./Servico");
exports.agenda = Instancia_1.sequelize.define('agenda', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    funcionario_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Funcionario_1.funcionarios,
            key: 'id'
        }
    },
    cliente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuarios_1.usuarios,
            key: 'id'
        }
    },
    servico_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Servico_1.servicos,
            key: 'id'
        }
    },
    metodo_de_pagamento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});
