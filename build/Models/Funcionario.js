"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcionarios = void 0;
var sequelize_1 = require("sequelize");
var Instancia_1 = require("../db/Instancia");
var Usuarios_1 = require("./Usuarios");
exports.funcionarios = Instancia_1.sequelize.define('funcionarios', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: Usuarios_1.usuarios,
            key: 'id'
        }
    }
}, {
    timestamps: false
});
