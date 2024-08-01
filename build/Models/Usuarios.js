"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios = void 0;
var sequelize_1 = require("sequelize");
var Instancia_1 = require("../db/Instancia");
exports.usuarios = Instancia_1.sequelize.define('usuarios', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
});
