"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estabelecimento = void 0;
var sequelize_1 = require("sequelize");
var Instancia_1 = require("../db/Instancia");
var Usuarios_1 = require("./Usuarios");
var Categorias_1 = require("./Categorias");
exports.estabelecimento = Instancia_1.sequelize.define('funcionarios', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cep: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    usuario_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuarios_1.usuarios,
            key: 'id'
        }
    },
    url_logo: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    url_planoDeFundo: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    descricao: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    categoria_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categorias_1.categorias,
            key: 'id'
        }
    },
}, {
    timestamps: false
});
