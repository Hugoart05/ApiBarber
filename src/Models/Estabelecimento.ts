import { DataTypes, Model, Optional } from "sequelize"
import { AutoIncrement, DataType } from "sequelize-typescript"
import { sequelize } from '../db/Instancia'
import { Funcionario } from "./Funcionario"
import { Categoria } from "./Categoria"

export interface IEstabelecimento {
    id: number
    nome: string
    usuarioId: number
    urlLogo?: string
    urlPlanoDeFundo?: string
    descricao?: string
    categoriaId: number
}

export interface IEstabelecimentoCreatcaoAtributos extends Optional<IEstabelecimento, 'id'> { }

export class Estabelecimento extends Model<IEstabelecimento, IEstabelecimentoCreatcaoAtributos> implements IEstabelecimento {
    public id!: number;
    public nome!: string;
    public usuarioId!: number;
    public urlLogo?: string;
    public urlPlanoDeFundo?: string;
    public descricao?: string;
    public categoriaId!: number;
}


Estabelecimento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    urlLogo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    urlPlanoDeFundo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descricao: {
        type: DataType.STRING,
        allowNull: true
    }
},
    {
        sequelize,
        tableName: 'estabelecimentos',
        timestamps: false
    }
)

Funcionario.belongsTo(Estabelecimento, {foreignKey:"estabelecimentoId"})
Estabelecimento.hasMany(Funcionario, {foreignKey:"estabelecimentoId"})