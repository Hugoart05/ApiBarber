import { DataTypes, Model, Optional } from "sequelize"
import { User } from "./Usuarios"
import { sequelize } from "../db/Instancia"


export interface FuncionarioAtributos {
    id: number
    usuarioId: number
    nome: string
    cargo?: string
    email:string
}

interface FuncionarioCreationAtributos extends Optional<FuncionarioAtributos, 'id'> { }

export class Funcionario extends Model<FuncionarioAtributos, FuncionarioCreationAtributos> implements FuncionarioAtributos {
    public id!: number;
    public usuarioId!: number;
    public nome!: string
    public cargo?: string;
    public email!:string
}

Funcionario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false
    },
},
    {
        sequelize,
        tableName: 'funcionarios',
        timestamps:false
    }
)



