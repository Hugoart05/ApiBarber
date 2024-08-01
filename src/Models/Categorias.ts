import { DataTypes } from "sequelize";
import { sequelize } from "../db/Instancia";

export const categorias = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
})