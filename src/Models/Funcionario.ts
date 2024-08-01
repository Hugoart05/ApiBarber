import { DataTypes } from "sequelize";
import { sequelize } from "../db/Instancia";
import { usuarios } from "./Usuarios";

export const funcionarios = sequelize.define('funcionarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: usuarios,
            key: 'id'
        }
    }
},{
    timestamps: false
})