"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicos = void 0;
var sequelize_1 = require("sequelize");
var Instancia_1 = require("../db/Instancia");
exports.servicos = Instancia_1.sequelize.define('servicos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: sequelize_1.DataTypes.DECIMAL(11, 10),
        allowNull: false,
    },
    descricao: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    }
}, {
    timestamps: false
});
