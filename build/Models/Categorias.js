"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorias = void 0;
var sequelize_1 = require("sequelize");
var Instancia_1 = require("../db/Instancia");
exports.categorias = Instancia_1.sequelize.define('categorias', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});
