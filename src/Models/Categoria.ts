import { Model, Optional } from "sequelize"
import { DataType } from "sequelize-typescript"
import { sequelize } from "../db/Instancia"
import { Estabelecimento } from "./Estabelecimento"

interface ICategoria {
    id: number
    nome: string
}

export interface CategoriaCreationAtributes extends Optional<ICategoria, 'id'> { }

export class Categoria extends Model<ICategoria, CategoriaCreationAtributes> implements ICategoria {
    public id!: number
    public nome!: string
}

Categoria.init({
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataType.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        tableName:"category",
        timestamps:false
    }
)

Categoria.hasMany(Estabelecimento, {foreignKey:"categoriaId"})