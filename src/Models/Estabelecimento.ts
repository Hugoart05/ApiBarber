import { DataTypes } from "sequelize";
import { sequelize } from "../db/Instancia";
import { usuarios } from "./Usuarios";
import { categorias } from "./Categorias";

export const estabelecimento = sequelize.define('funcionarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cep: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuarios,
            key: 'id'
        }
    },
    url_logo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    url_planoDeFundo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,

    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: categorias,
            key: 'id'
        }
    },

}, {
    timestamps: false
})