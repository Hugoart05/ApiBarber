import { DataTypes, Model, ModelCtor, ModelStatic, Optional, } from "sequelize";

import { sequelize } from "../db/Instancia";
import { Funcionario } from "./Funcionario";

export interface UserAtributtes {
    id: number
    nome: string
    email: string
    telefone: string
    senha: string
}

interface UserCreateAttributes extends Optional<UserAtributtes, 'id'> { }

export class User extends Model<UserAtributtes, UserCreateAttributes> implements UserAtributtes {
    public id!: number;
    public nome!: string;
    public email!: string;
    public telefone!: string;
    public senha!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'usuarios',
        timestamps:false
    }
)

User.hasMany(Funcionario, {foreignKey: 'usuarioId'});



