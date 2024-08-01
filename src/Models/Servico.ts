import { DataTypes } from "sequelize";
import { sequelize } from "../db/Instancia";

export const servicos = sequelize.define('servicos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL(11, 10),
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
    }

}, {
    timestamps: false
})