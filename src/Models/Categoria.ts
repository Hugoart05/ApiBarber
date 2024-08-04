import { DataTypes, Model, Optional } from "sequelize"
import { DataType } from "sequelize-typescript"
import { sequelize } from "../db/Instancia"
import { Estabelecimento } from "./Estabelecimento"

interface ICategoria {
    id: number
    nome: string
    test:string
}

export interface CategoriaCreationAtributes extends Optional<ICategoria, 'id'> { }

export class Categoria extends Model<ICategoria, CategoriaCreationAtributes> implements ICategoria {
    public id!: number
    public nome!: string
    public test!: string
}

Categoria.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    test:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
    {
        sequelize,
        tableName:"categorias",
        timestamps:false,
    }
)

Categoria.hasMany(Estabelecimento, {foreignKey:"categoriaId"})
Estabelecimento.belongsTo(Categoria, {foreignKey:"categoriaId"})