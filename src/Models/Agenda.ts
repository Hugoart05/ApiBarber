import { DataTypes } from "sequelize";
import { sequelize } from "../db/Instancia";
import { funcionarios } from "./Funcionario";
import { usuarios } from "./Usuarios";
import { servicos } from "./Servico";

export const agenda = sequelize.define('agenda', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    funcionario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: funcionarios,
            key: 'id'
        }
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuarios,
            key: 'id'
        }
    },
    servico_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: servicos,
            key: 'id'
        }
    },
    metodo_de_pagamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false
})