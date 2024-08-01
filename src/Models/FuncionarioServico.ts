import { DataTypes } from "sequelize";
import { sequelize } from "../db/Instancia";
import { funcionarios } from "./Funcionario";
import { servicos } from "./Servico";

export const funcionariosServicos = sequelize.define('funcionarios_servicos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    funcionarios_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: funcionarios,
            key: 'id'
        }
    },
    servicos_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: servicos,
            key: 'id'
        }
    },
},{
    timestamps: false
})